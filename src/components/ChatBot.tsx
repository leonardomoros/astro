import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Loader2 } from 'lucide-react';

/* ── Gixy mascot SVG ────────────────────────────────────────────── */
function GixyAvatar({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gixy-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      {/* Ears */}
      <polygon points="7,19 12,5 17,19"  fill="url(#gixy-g)" />
      <polygon points="9.5,18 12,9 14.5,18" fill="#a5b4fc" opacity="0.45" />
      <polygon points="23,19 28,5 33,19" fill="url(#gixy-g)" />
      <polygon points="25.5,18 28,9 30.5,18" fill="#a5b4fc" opacity="0.45" />
      {/* Head */}
      <circle cx="20" cy="25" r="13.5" fill="url(#gixy-g)" />
      {/* Eyes — white + pupil + shine */}
      <circle cx="15" cy="23" r="3.2"  fill="white" />
      <circle cx="25" cy="23" r="3.2"  fill="white" />
      <circle cx="15.6" cy="23.5" r="2"   fill="#1e1b4b" />
      <circle cx="25.6" cy="23.5" r="2"   fill="#1e1b4b" />
      <circle cx="16.2" cy="22.4" r="0.75" fill="white" />
      <circle cx="26.2" cy="22.4" r="0.75" fill="white" />
      {/* Nose */}
      <path d="M19.3 27.2 L20 26 L20.7 27.2 Q20 28.2 19.3 27.2Z" fill="#c4b5fd" />
      {/* Mouth */}
      <path d="M17.5 30 Q20 32.5 22.5 30" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.65" />
      {/* Whiskers */}
      <line x1="3"  y1="26" x2="16" y2="27.5" stroke="white" strokeWidth="0.65" opacity="0.4" />
      <line x1="3"  y1="29" x2="16" y2="29"   stroke="white" strokeWidth="0.65" opacity="0.4" />
      <line x1="24" y1="27.5" x2="37" y2="26" stroke="white" strokeWidth="0.65" opacity="0.4" />
      <line x1="24" y1="29"   x2="37" y2="29" stroke="white" strokeWidth="0.65" opacity="0.4" />
    </svg>
  );
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Lead {
  name?: string;
  email?: string;
  service?: string;
  company?: string;
}

const WELCOME: Message = {
  role: 'assistant',
  content: '¡Hola! Soy Gixy 👋 ¿En qué puedo ayudarte hoy? Puedo contarte sobre nuestros servicios, precios o ayudarte a dar el primer paso.',
};

export default function ChatBot() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [messages,  setMessages]  = useState<Message[]>([WELCOME]);
  const [input,     setInput]     = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lead,      setLead]      = useState<Lead | null>(null);
  const [hasUnread, setHasUnread] = useState(false);

  const bottomRef  = useRef<HTMLDivElement>(null);
  const inputRef   = useRef<HTMLTextAreaElement>(null);

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { role: 'user', content: text };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();
      const botMsg: Message = {
        role: 'assistant',
        content: data.message ?? 'Lo siento, hubo un error. Intenta de nuevo.',
      };

      setMessages(prev => [...prev, botMsg]);

      if (data.lead) {
        setLead(prev => ({ ...prev, ...data.lead }));
      }

      if (!isOpen) setHasUnread(true);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Hubo un error de conexión. Por favor intenta de nuevo.',
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, isOpen]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* ── Chat window ──────────────────────────────────────────── */}
      <div
        className={`
          fixed bottom-24 right-4 sm:right-6 z-50
          w-[calc(100vw-2rem)] sm:w-[380px] max-w-[420px]
          flex flex-col rounded-2xl overflow-hidden
          shadow-2xl shadow-black/40
          border border-white/10
          transition-all duration-300 ease-out origin-bottom-right
          ${isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
        style={{ background: '#111117', maxHeight: '75vh' }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #6d28d9)' }}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
            <GixyAvatar size={36} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Gixy</p>
            <p className="text-white/70 text-xs leading-tight">Asistente de GixLabs · En línea</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Cerrar chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mr-2 mt-0.5">
                  <GixyAvatar size={28} />
                </div>
              )}
              <div
                className={`
                  max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'text-white rounded-tr-sm'
                    : 'text-gray-100 rounded-tl-sm'
                  }
                `}
                style={msg.role === 'user'
                  ? { background: 'linear-gradient(135deg, #4f46e5, #6d28d9)' }
                  : { background: '#1e1e2a', border: '1px solid rgba(79,70,229,0.2)' }
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mr-2 mt-0.5">
                <GixyAvatar size={28} />
              </div>
              <div
                className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm"
                style={{ background: '#1e1e2a', border: '1px solid rgba(79,70,229,0.2)' }}
              >
                <Loader2 size={16} className="text-purple-400 animate-spin" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Lead captured banner */}
        {lead?.email && (
          <div
            className="mx-3 mb-2 px-3 py-2 rounded-xl text-xs text-center flex-shrink-0"
            style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)', color: '#a5b4fc' }}
          >
            ✓ Te pondremos en contacto pronto, {lead.name ?? 'amigo/a'}.
          </div>
        )}

        {/* Input */}
        <div
          className="flex items-end gap-2 p-3 flex-shrink-0"
          style={{ background: '#16161f', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje…"
            rows={1}
            className="
              flex-1 resize-none rounded-xl px-3.5 py-2.5
              text-sm text-gray-100 placeholder-gray-500
              outline-none transition-all
              scrollbar-none
            "
            style={{
              background: '#1e1e2a',
              border: '1px solid rgba(79,70,229,0.25)',
              maxHeight: '120px',
              lineHeight: '1.5',
            }}
            onInput={e => {
              const el = e.currentTarget;
              el.style.height = 'auto';
              el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="
              flex-shrink-0 w-9 h-9 rounded-xl
              flex items-center justify-center
              transition-all duration-200
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:scale-105 active:scale-95
            "
            style={{ background: 'linear-gradient(135deg, #4f46e5, #6d28d9)' }}
            aria-label="Enviar"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
      </div>

      {/* ── Floating button ───────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="
          fixed bottom-5 right-4 sm:right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-xl shadow-indigo-600/30
          transition-all duration-200
          hover:scale-110 active:scale-95
        "
        style={{ background: 'linear-gradient(135deg, #4f46e5, #6d28d9)' }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen
          ? <X size={22} className="text-white" />
          : <GixyAvatar size={34} />
        }
        {hasUnread && !isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 border-2 border-[#111117]" />
        )}
      </button>
    </>
  );
}
