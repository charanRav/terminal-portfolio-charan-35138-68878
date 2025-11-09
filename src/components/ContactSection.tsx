
import { Mail, Linkedin, Send, User, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
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
        title: t('contact.errorTitle'),
        description: t('contact.errorAllFields'),
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.errorTitle'),
        description: t('contact.errorInvalidEmail'),
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Using Formspree to send to ravulacharan7@gmail.com
      // TODO: Replace 'YOUR_FORM_ID_HERE' with your actual Formspree form ID
      // Get it from: https://formspree.io/forms (after creating your form)
      const response = await fetch('https://formspree.io/f/xblpqoqg', {
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
          title: t('contact.successTitle'),
          description: t('contact.successDesc'),
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: t('contact.errorTitle'),
        description: t('contact.errorSendFailed'),
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
        title: t('contact.emailClientOpening'),
        description: t('contact.emailClientOpeningDesc'),
      });
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText('ravulacharan7@gmail.com').then(() => {
        toast({
          title: t('contact.emailCopied'),
          description: t('contact.emailCopiedDesc'),
        });
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20" ref={ref}>
      <div className={`container mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('contact.connect')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleDirectEmail}
                className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group w-full text-left"
              >
                <Mail className="w-6 h-6 text-tech-blue group-hover:animate-float" />
                <div>
                  <div className="font-semibold">{t('contact.email')}</div>
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
                  <div className="font-semibold">{t('contact.linkedin')}</div>
                  <div className="text-muted-foreground">{t('contact.linkedinText')}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4" />
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4" />
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                  <MessageCircle className="w-4 h-4" />
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4 group-hover:animate-float" />
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
