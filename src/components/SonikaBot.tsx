"use client";

import React, { useState, useEffect, useRef } from "react";
import { WhatsAppIcon } from "./Icons";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_REPLIES = [
  "Browse Sheets & Quilts",
  "Ethnic Fashion",
  "Shop on WhatsApp",
  "Heritage of Jaipur",
  "Delivery Info",
];

export default function SonikaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! 🙏 Welcome to the House of Sonika. I am your personal guide. How can I help you explore the magic of Jaipur today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      if (data.content) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      } else {
        throw new Error("No content");
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting to the Jaipur artisans right now. Please try again or message us on WhatsApp!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-['Josefin_Sans',sans-serif]">
      {/* ── TOGGLE BUTTON ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 cursor-pointer ${
          isOpen ? "bg-deep text-gold rotate-90" : "bg-rose text-white"
        }`}
        style={{
          boxShadow: isOpen 
            ? "0 10px 25px rgba(43, 26, 26, 0.3)" 
            : "0 10px 25px rgba(192, 72, 74, 0.3)"
        }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <span className="text-2xl">✨</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-rose animate-pulse" />
          </div>
        )}
      </button>

      {/* ── CHAT WINDOW ── */}
      <div
        className={`absolute bottom-20 right-0 w-[360px] max-w-[calc(100vw-48px)] bg-ivory rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        }`}
        style={{ border: "1px solid var(--sand)" }}
      >
        {/* Header */}
        <div className="bg-deep p-5 text-white flex items-center justify-between border-b border-gold/20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/40 text-xl shadow-inner text-white">
              🌸
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-wide text-gold">Sonika Guide</div>
              <div className="text-[10px] uppercase tracking-[2px] opacity-60 flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Ready to guide you
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer p-2 hover:bg-white/10 rounded-full"
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-ivory to-cream/30 scroll-smooth"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "bg-rose text-white rounded-tr-none"
                    : "bg-white text-deep border border-sand/40 rounded-tl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-sand/40 flex gap-1">
                <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && !isLoading && (
          <div className="px-5 pb-2 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((text) => (
              <button
                key={text}
                onClick={() => handleSend(text)}
                className="text-[11px] px-3 py-1.5 rounded-full border border-sand bg-white hover:bg-gold hover:text-deep hover:border-gold transition-all duration-300 text-muted cursor-pointer"
              >
                {text}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white border-t border-sand/30 flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            placeholder="Ask about history, crafts, or shopping..."
            className="flex-1 bg-cream/50 border border-sand/20 rounded-full px-4 py-2.5 text-[14px] focus:outline-none focus:border-gold/50 transition-colors"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-deep text-gold flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 disabled:opacity-30 disabled:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        
        {/* Footer */}
        <a 
          href="https://wa.me/8188000001" 
          target="_blank" 
          rel="noreferrer"
          className="block bg-green-50/50 py-2 text-center text-[10px] text-green-700 hover:text-green-800 transition-colors border-t border-green-100 flex items-center justify-center gap-2 group"
        >
          <WhatsAppIcon className="w-3 h-3 group-hover:scale-110 transition-transform" />
          Direct Shop: 8188000001
        </a>
      </div>

      <style jsx>{`
        .scroll-smooth::-webkit-scrollbar {
          width: 4px;
        }
        .scroll-smooth::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-smooth::-webkit-scrollbar-thumb {
          background: var(--sand);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
