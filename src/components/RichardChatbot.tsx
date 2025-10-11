import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Loader2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  sender: "user" | "bot";
  content: string;
}

interface RichardChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const MESSAGE_LIMIT = 20;

export const RichardChatbot = ({ isOpen, onClose }: RichardChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(() => {
    const stored = localStorage.getItem('richard_message_count');
    return stored ? parseInt(stored, 10) : 0;
  });
  const { toast } = useToast();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        sender: "bot",
        content: "Hey there! 👋 I'm Richard, your digital tour guide through Ravula Charan's portfolio. What should I call you?",
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('richard_message_count', messageCount.toString());
  }, [messageCount]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Check message limit
    if (messageCount >= MESSAGE_LIMIT) {
      toast({
        title: "Message Limit Reached",
        description: `You've reached the ${MESSAGE_LIMIT} message limit. Richard needs to rest to keep this service free! 😴`,
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      sender: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setMessageCount(prev => prev + 1);

    // Auto-focus input after sending message
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    try {
      // Build conversation history for AI
      const conversationHistory = [...messages, userMessage].map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content
      }));

      const { data, error } = await supabase.functions.invoke('chat-richard', {
        body: { messages: conversationHistory }
      });

      if (error) throw error;

      setMessages((prev) => [...prev, {
        sender: "bot",
        content: data.reply
      }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, {
        sender: "bot",
        content: "Oops! 😅 My circuits got a bit tangled. Can you try that again?"
      }]);
      setMessageCount(prev => prev - 1); // Revert count on error
    } finally {
      setIsLoading(false);
      // Re-focus input after response
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] md:w-full h-[90vh] md:h-[90vh] p-0 bg-black border-2 border-blue-500/30 overflow-hidden [&>button]:hidden">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex flex-col gap-2 p-4 border-b border-blue-500/20">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Chat with Richard 🤖</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-blue-500/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-start gap-2 bg-blue-950/30 rounded-lg p-3 border border-blue-500/20">
              <AlertCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-blue-200">
                <span className="font-semibold">Free AI Service:</span> You have {MESSAGE_LIMIT - messageCount}/{MESSAGE_LIMIT} messages remaining. Use wisely! After Oct 13, 2025, usage may incur costs.
              </div>
            </div>
          </div>

          {/* Spline Robot */}
          <div className="w-full h-48 md:h-80 bg-gradient-to-b from-black to-blue-950/20">
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-6gjqpt88Yu2jF3R84agABSrr/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ pointerEvents: 'auto' }}
              allow="pointer-lock"
            />
          </div>

          {/* Chat Messages */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gradient-to-b from-blue-950/20 to-black max-h-[400px] md:max-h-[500px]"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="text-sm">Richard is thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-blue-500/20 bg-black">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-900 border-blue-500/30 text-white placeholder:text-gray-500"
                disabled={isLoading}
                autoFocus
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
