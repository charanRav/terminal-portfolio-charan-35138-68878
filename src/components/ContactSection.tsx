
import { Mail, Linkedin, Send, User, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Using Formspree to send to ravulacharan7@gmail.com
      const response = await fetch('https://formspree.io/f/xpwzgbve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New message from ${formData.name} via Portfolio`,
          _to: 'ravulacharan7@gmail.com',
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact - Opportunity Discussion");
    const body = encodeURIComponent(`Hi Ravula Charan,

I found your portfolio and would like to connect regarding potential opportunities.

Best regards,`);
    
    // Create mailto link
    const mailtoLink = `mailto:ravulacharan7@gmail.com?subject=${subject}&body=${body}`;
    
    // Try to open email client
    try {
      window.location.href = mailtoLink;
      
      // Show success toast
      toast({
        title: "Email Client Opening",
        description: "Your default email client should open now. If not, please email ravulacharan7@gmail.com directly.",
      });
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText('ravulacharan7@gmail.com').then(() => {
        toast({
          title: "Email Copied",
          description: "Email address copied to clipboard: ravulacharan7@gmail.com",
        });
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just having a conversation about AI, technology, and problem-solving.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleDirectEmail}
                className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group w-full text-left"
              >
                <Mail className="w-6 h-6 text-tech-blue group-hover:animate-float" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">ravulacharan7@gmail.com</div>
                </div>
              </button>

              <a
                href="https://linkedin.com/in/ravula-charan-ab2692267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-tech-blue group-hover:animate-float" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-muted-foreground">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                  <MessageCircle className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4 group-hover:animate-float" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
