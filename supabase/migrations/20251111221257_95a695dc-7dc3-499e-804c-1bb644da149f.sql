-- Fix the search_path security issue with CASCADE
DROP FUNCTION IF EXISTS update_last_updated_column() CASCADE;

CREATE OR REPLACE FUNCTION update_last_updated_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER update_leads_last_updated
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_last_updated_column();