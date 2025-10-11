-- Create feedback storage table for Richard chatbot
CREATE TABLE public.richard_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  visitor_name TEXT,
  interaction_rating INTEGER CHECK (interaction_rating BETWEEN 1 AND 5),
  experience_rating INTEGER CHECK (experience_rating BETWEEN 1 AND 5),
  humor_rating INTEGER CHECK (humor_rating BETWEEN 1 AND 5),
  would_recommend BOOLEAN,
  additional_comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.richard_feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit and view feedback
CREATE POLICY "Anyone can submit feedback" ON public.richard_feedback
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view feedback" ON public.richard_feedback
FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX idx_richard_feedback_visitor_id ON public.richard_feedback(visitor_id);
CREATE INDEX idx_richard_feedback_created_at ON public.richard_feedback(created_at DESC);