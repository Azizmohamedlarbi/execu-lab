import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const AuditRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    annualRevenue: "",
    painPoints: "",
    interestedInRetainer: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into leads table first
      const { data: leadData, error: leadError } = await supabase
        .from("leads")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          company_name: formData.companyName || null,
          lead_type: "audit",
        })
        .select()
        .single();

      if (leadError) throw leadError;

      // Insert into audit_requests table
      const { error: auditError } = await supabase
        .from("audit_requests")
        .insert({
          lead_id: leadData.id,
          industry: formData.industry,
          annual_revenue: formData.annualRevenue || null,
          pain_points: formData.painPoints,
          interested_in_retainer: formData.interestedInRetainer,
        } as any);

      if (auditError) throw auditError;

      toast.success("Audit request submitted successfully! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        industry: "",
        annualRevenue: "",
        painPoints: "",
        interestedInRetainer: false,
      });

      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("Error submitting audit request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="companyName">Company Name *</Label>
        <Input
          id="companyName"
          required
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="industry">Industry *</Label>
        <Select required value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="healthtech">HealthTech & Life Sciences</SelectItem>
            <SelectItem value="fintech">FinTech & Financial Services</SelectItem>
            <SelectItem value="esg">ESG & Sustainability</SelectItem>
            <SelectItem value="ai_governance">AI Governance & Integration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="annualRevenue">Annual Revenue</Label>
        <Select value={formData.annualRevenue} onValueChange={(value) => setFormData({ ...formData, annualRevenue: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select revenue range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under_1m">Under $1M</SelectItem>
            <SelectItem value="1m_to_10m">$1M - $10M</SelectItem>
            <SelectItem value="10m_to_50m">$10M - $50M</SelectItem>
            <SelectItem value="over_50m">Over $50M</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="painPoints">Top 3 Operational Pain Points *</Label>
        <Textarea
          id="painPoints"
          required
          rows={4}
          placeholder="Describe your main operational challenges..."
          value={formData.painPoints}
          onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="retainer"
          checked={formData.interestedInRetainer}
          onCheckedChange={(checked) => setFormData({ ...formData, interestedInRetainer: checked as boolean })}
        />
        <Label htmlFor="retainer" className="font-normal">
          I'm interested in discussing a continuous optimization retainer
        </Label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Submit Audit Request
      </Button>
    </form>
  );
};
