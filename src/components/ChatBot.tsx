import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

/* ── Gixy icon — replicates the 3 favicon shapes ───────────────── */
function GixyIcon({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="9" fill="#0a0a0a" />
      {/* 1 · Pink vertical parallelogram (the "slash" stroke) */}
      <polygon fill="#d62b84" points="19,6 23,11 23,29 19,34" />
      {/* 2 · Violet horizontal bar */}
      <rect fill="#7c5aa2" x="4" y="17" width="15" height="6" rx="1" />
      {/* 3 · Blue angular corner */}
      <polygon fill="#689cd3" points="36,20 28,33 22,33 34,19" />
    </svg>
  );
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  showForm?: boolean;
}

interface Lead {
  name?: string;
  email?: string;
  service?: string;
  company?: string;
}

const SERVICES = [
  'Desarrollo Web', 'Estrategia SEO', 'Landing Pages',
  'Email Marketing', 'Publicidad Pagada', 'Optimización Web',
  'Diseño UX/UI', 'Otro',
];

/* ── Inline lead form ────────────────────────────────────────────── */
function LeadForm({ onSubmit }: { onSubmit: (d: Lead) => void }) {
  const [data, setData] = useState<Lead>({ name: '', email: '', service: '', company: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name || !data.email || !data.service) return;
    setSent(true);
    onSubmit(data);
  }

  if (sent) {
    return (
      <div className="mt-3 px-4 py-3 rounded-xl text-sm text-center"
        style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)', color: '#a5b4fc' }}>
        ✓ ¡Datos enviados! Te contactaremos pronto.
      </div>
    );
  }

  const inputCls = "w-full px-3 py-2 rounded-lg text-sm text-gray-100 outline-none transition-colors";
  const inputStyle = {
    background: '#0f0f1a',
    border: '1px solid rgba(79,70,229,0.25)',
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2.5 p-4 rounded-xl"
      style={{ background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.2)' }}>
      <p className="text-xs font-semibold text-indigo-400 tracking-wide uppercase mb-1">Tus datos de contacto</p>
      <input
        required
        type="text"
        placeholder="Tu nombre *"
        value={data.name}
        onChange={e => setData(p => ({ ...p, name: e.target.value }))}
        className={inputCls} style={inputStyle}
      />
      <input
        required
        type="email"
        placeholder="Tu email *"
        value={data.email}
        onChange={e => setData(p => ({ ...p, email: e.target.value }))}
        className={inputCls} style={inputStyle}
      />
      <select
        required
        value={data.service}
        onChange={e => setData(p => ({ ...p, service: e.target.value }))}
        className={inputCls} style={{ ...inputStyle, color: data.service ? '#f1f5f9' : '#6b7280' }}
      >
        <option value="" disabled>Servicio que necesitas *</option>
        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <input
        type="text"
        placeholder="Empresa o negocio"
        value={data.company}
        onChange={e => setData(p => ({ ...p, company: e.target.value }))}
        className={inputCls} style={inputStyle}
      />
      <button type="submit"
        className="mt-1 w-full py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, #4f46e5, #6d28d9)' }}>
        Enviar →
      </button>
    </form>
  );
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

  const callAPI = useCallback(async (nextMessages: Message[]) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Strip showForm flag before sending to API
        body: JSON.stringify({ messages: nextMessages.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      const botMsg: Message = {
        role: 'assistant',
        content: data.message ?? 'Lo siento, hubo un error. Intenta de nuevo.',
        showForm: data.showForm ?? false,
      };
      setMessages(prev => [...prev, botMsg]);
      if (data.lead) setLead(prev => ({ ...prev, ...data.lead }));
      if (!isOpen) setHasUnread(true);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Hubo un error de conexión. Por favor intenta de nuevo.',
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    const userMsg: Message = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    await callAPI(next);
  }, [input, isLoading, messages, callAPI]);

  // Called when the user submits the inline lead form
  const handleFormSubmit = useCallback(async (data: Lead) => {
    const summary = `Mis datos de contacto:\nNombre: ${data.name}\nEmail: ${data.email}\nServicio: ${data.service}${data.company ? `\nEmpresa: ${data.company}` : ''}`;
    const userMsg: Message = { role: 'user', content: summary };
    const next = [...messages, userMsg];
    setMessages(next);
    await callAPI(next);
  }, [messages, callAPI]);

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
          <div className="flex-shrink-0">
            <GixyIcon size={34} />
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
            <div key={i}>
              <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && <div className="w-1 flex-shrink-0 mr-2" />}
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
              {/* Inline lead form — only on the last assistant message that requested it */}
              {msg.showForm && i === messages.length - 1 && !lead?.email && (
                <div className="ml-3">
                  <LeadForm onSubmit={handleFormSubmit} />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-1 flex-shrink-0 mr-2" />
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
          shadow-xl shadow-purple-500/30
          transition-all duration-200
          hover:scale-110 active:scale-95
        "
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen
          ? <X size={22} className="text-white" />
          : <MessageCircle size={24} className="text-white" />
        }
        {hasUnread && !isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 border-2 border-[#111117]" />
        )}
      </button>
    </>
  );
}
