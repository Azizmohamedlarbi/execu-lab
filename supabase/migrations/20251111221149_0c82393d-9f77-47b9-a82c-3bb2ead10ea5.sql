-- Create enum for lead types
CREATE TYPE public.lead_type AS ENUM ('blueprint', 'audit', 'partnership');

-- Create enum for project stages
CREATE TYPE public.project_stage AS ENUM ('pre_seed', 'seed', 'series_a', 'corporate');

-- Create enum for industries
CREATE TYPE public.industry_vertical AS ENUM ('healthtech', 'fintech', 'esg', 'ai_governance', 'other');

-- Create enum for budget ranges
CREATE TYPE public.budget_range AS ENUM ('under_15k', '15k_to_30k', '30k_to_50k', 'over_50k');

-- Create enum for revenue ranges
CREATE TYPE public.revenue_range AS ENUM ('under_1m', '1m_to_10m', '10m_to_50m', 'over_50m');

-- Create leads table for capturing all inquiries
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  
  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  
  -- Lead Classification
  lead_type lead_type NOT NULL,
  
  -- Status tracking
  status TEXT DEFAULT 'new' NOT NULL,
  notes TEXT,
  
  -- Metadata
  source TEXT DEFAULT 'website',
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create blueprint_requests table for specific blueprint inquiries
CREATE TABLE public.blueprint_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  
  -- Project Details
  project_name TEXT,
  project_description TEXT,
  stage project_stage,
  industry industry_vertical NOT NULL,
  budget budget_range,
  
  -- Qualifying Questions
  has_existing_pitch_deck BOOLEAN,
  
  UNIQUE(lead_id)
);

-- Create audit_requests table for optimization inquiries
CREATE TABLE public.audit_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  
  -- Company Details
  industry industry_vertical NOT NULL,
  annual_revenue revenue_range,
  
  -- Pain Points
  pain_points TEXT NOT NULL,
  interested_in_retainer BOOLEAN DEFAULT false,
  
  UNIQUE(lead_id)
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blueprint_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

-- Create policies (public submission, no read access for now - admin only)
CREATE POLICY "Anyone can submit leads"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit blueprint requests"
  ON public.blueprint_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit audit requests"
  ON public.audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_lead_type ON public.leads(lead_type);
CREATE INDEX idx_leads_status ON public.leads(status);

-- Create function to update last_updated timestamp
CREATE OR REPLACE FUNCTION update_last_updated_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating last_updated
CREATE TRIGGER update_leads_last_updated
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_last_updated_column();