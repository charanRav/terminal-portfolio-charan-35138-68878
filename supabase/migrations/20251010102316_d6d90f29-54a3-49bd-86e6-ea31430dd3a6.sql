-- Remove the public SELECT policy that exposes customer feedback
DROP POLICY IF EXISTS "Anyone can view feedback" ON public.richard_feedback;

-- Feedback can still be submitted by visitors (INSERT policy remains)
-- But only authenticated administrators can view it
-- Note: To view feedback data, access your backend database directly