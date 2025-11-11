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

export const BlueprintRequestForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    projectName: "",
    projectDescription: "",
    stage: "",
    industry: "",
    budget: "",
    hasExistingPitchDeck: false,
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
          lead_type: "blueprint",
        })
        .select()
        .single();

      if (leadError) throw leadError;

      // Insert into blueprint_requests table
      const { error: blueprintError } = await supabase
        .from("blueprint_requests")
        .insert({
          lead_id: leadData.id,
          project_name: formData.projectName || null,
          project_description: formData.projectDescription || null,
          stage: formData.stage || null,
          industry: formData.industry,
          budget: formData.budget || null,
          has_existing_pitch_deck: formData.hasExistingPitchDeck,
        } as any);

      if (blueprintError) throw blueprintError;

      toast.success("Blueprint request submitted successfully! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        projectName: "",
        projectDescription: "",
        stage: "",
        industry: "",
        budget: "",
        hasExistingPitchDeck: false,
      });

      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("Error submitting blueprint request:", error);
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
        <Label htmlFor="companyName">Company / Project Name</Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="stage">Project Stage *</Label>
        <Select value={formData.stage} onValueChange={(value) => setFormData({ ...formData, stage: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pre_seed">Pre-Seed</SelectItem>
            <SelectItem value="seed">Seed</SelectItem>
            <SelectItem value="series_a">Series A</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
          </SelectContent>
        </Select>
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
        <Label htmlFor="budget">Approximate Budget</Label>
        <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under_15k">Under $15K</SelectItem>
            <SelectItem value="15k_to_30k">$15K - $30K</SelectItem>
            <SelectItem value="30k_to_50k">$30K - $50K</SelectItem>
            <SelectItem value="over_50k">Over $50K</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="projectDescription">Project Description *</Label>
        <Textarea
          id="projectDescription"
          required
          rows={4}
          placeholder="Brief description of your project (200 words max)"
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="pitchDeck"
          checked={formData.hasExistingPitchDeck}
          onCheckedChange={(checked) => setFormData({ ...formData, hasExistingPitchDeck: checked as boolean })}
        />
        <Label htmlFor="pitchDeck" className="font-normal">
          I have an existing pitch deck or business plan
        </Label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Submit Blueprint Request
      </Button>
    </form>
  );
};
