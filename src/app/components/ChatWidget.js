"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, ChevronDown, Loader2, Phone, Mail, MoreHorizontal } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// --- Config ---
const LS_KEY = "tinitiate_chat_v1";
const ASSISTANT_AVATAR = "/images/tinitiatelogo.png";
const USER_AVATAR_LETTER = "You";

// Handoff links
const WHATSAPP_LINK = "https://wa.me/919553495553";
const EMAIL_LINK = "mailto:contact@tinitiate.com?subject=TINITIATE%20Website%20Chat&body=Hi%20TINITIATE%2C%0A%0A";
const PHONE_LINK_IN = "tel:+919553495553";
const PHONE_LINK_US = "tel:+19736536870";

// Larger suggestions pool
const SUGGESTIONS_POOL = [
  "What services does TINITIATE offer?",
  "Tell me about the Work Experience Program.",
  "How do I enroll?",
  "Do you provide corporate training?",
  "What tech stacks do you train on?",
  "Do you help with job placement?",
  "What is the fee structure?",
  "Do you offer weekend batches?",
  "Can you customize corporate training?",
  "What are the contact options?",
  "Do you build web & data engineering projects?",
  "What is included in maintenance & support?",
];

const CONTACT_TOKEN = "<CONTACT_CARD />";

function hasContactToken(text = "") {
  return text.includes(CONTACT_TOKEN);
}

function stripContactToken(text = "") {
  return text.replace(CONTACT_TOKEN, "").trim();
}

function ContactHandoff() {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <a
        href="https://wa.me/919553495553"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full text-sm border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition"
        title="WhatsApp"
      >
        WhatsApp us
      </a>
      <a
        href="mailto:contact@tinitiate.com?subject=TINITIATE%20Website%20Chat&body=Hi%20TINITIATE%2C%0A%0A"
        className="px-3 py-1.5 rounded-full text-sm border border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100 transition"
        title="Email"
      >
        Email us
      </a>
      <a
        href="tel:+919553495553"
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
        title="Call (India)"
      >
        Call (India)
      </a>
      <a
        href="tel:+19736536870"
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
        title="Call (USA)"
      >
        Call (USA)
      </a>
      <a
        href="tel:+12068024102"
        className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
        title="Alt (USA)"
      >
        Alt (USA)
      </a>
    </div>
  );
}

// --- Streaming helpers ---
function appendDeltaSafely(prev, delta) {
  if (!delta) return prev;
  const d = String(delta).replace(/\r\n?/g, "\n");
  const maxOverlap = Math.min(200, prev.length, d.length);
  for (let len = maxOverlap; len > 0; len--) {
    if (prev.slice(-len) === d.slice(0, len)) return prev + d.slice(len);
  }
  return prev + d;
}
function cleanupStutter(text) {
  let t = text;
  // collapse duplicated words, but letters only (avoid touching numbers)
  t = t.replace(/\b([A-Za-z]+)(\s+\1\b)+/g, "$1");
  // collapse duplicate punctuation
  t = t.replace(/([,.!?])\s*\1+/g, "$1 ");
  // tidy spaces/newlines
  t = t.replace(/[ \t]{2,}/g, " ").replace(/\n{3,}/g, "\n\n");
  return t.trim();
}
function pickRandom(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

export default function ChatWidget() {
  // Panel and dial
  const [panelOpen, setPanelOpen] = useState(false);
  const [dialOpen, setDialOpen] = useState(false);

  // Chat state (with localStorage)
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || "null");
        if (Array.isArray(saved) && saved.length) return saved;
      } catch {}
    }
    return [
      { role: "assistant", content: "👋 Hi! I’m the TINITIATE Assistant. Ask me about our courses, WEP, or services!" }
    ];
  });
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem(LS_KEY, JSON.stringify(messages));
  }, [messages]);

  // Suggestions visibility + randomization
  const hasChatted = useMemo(() => messages.some(m => m.role === "user"), [messages]);
  const [showPrompts, setShowPrompts] = useState(!hasChatted);
  const [promptChoices, setPromptChoices] = useState(() => pickRandom(SUGGESTIONS_POOL, 4));
  useEffect(() => {
    // Whenever prompts are (re)shown, refresh with random options
    if (showPrompts) setPromptChoices(pickRandom(SUGGESTIONS_POOL, 4));
  }, [showPrompts]);

  // Scrolling and references
  const [atBottom, setAtBottom] = useState(true);
  const panelRef = useRef(null);
  const fabRef = useRef(null);
  const messagesRef = useRef(null);
  const messagesEndRef = useRef(null);
  const moreRef = useRef(null);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    const onScroll = () => setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 24);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Only close the "More" menu on outside click; DO NOT close the panel on outside click
  useEffect(() => {
    function onDocClick(e) {
      const more = moreRef.current;
      if (moreOpen && more && !more.contains(e.target)) setMoreOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") {
        if (moreOpen) setMoreOpen(false);
        // Optional: allow Esc to close panel. Remove next line if you don't want Esc to close it.
        else if (panelOpen) setPanelOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick, true);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick, true);
      document.removeEventListener("keydown", onEsc);
    };
  }, [panelOpen, moreOpen]);

  // Reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Streaming
  const abortRef = useRef(null);
  const textRef = useRef(null);

  function openPanel() {
    setPanelOpen(true);
    setDialOpen(false);
    setTimeout(() => textRef.current?.focus(), 60);
  }

  useEffect(() => {
    if (panelOpen && atBottom) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, panelOpen, atBottom]);

  function handleInputChange(e) {
    setInput(e.target.value);
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = Math.min(120, ta.scrollHeight) + "px";
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) sendMessage(input);
    }
  }

  async function sendMessage(text) {
    const userText = text.trim();
    if (!userText || busy) return;

    const historyToSend = messages.slice(-6);
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setMessages(prev => [...prev, { role: "user", content: userText }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setShowPrompts(false); // hide suggestions after first user message

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        signal: abortRef.current.signal,
        body: JSON.stringify({
          message: userText,
          history: historyToSend,
          pageTitle: document.title,
          pageUrl: window.location.href
        })
      });
      if (!res.ok || !res.body) throw new Error("Network/stream error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let partial = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        partial = appendDeltaSafely(partial, chunk);
        setMessages(prev => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last?.role === "assistant") last.content = partial;
          return copy;
        });
      }

      setMessages(prev => {
        const copy = [...prev];
        const last = copy[copy.length - 1];
        if (last?.role === "assistant") last.content = cleanupStutter(last.content);
        return copy;
      });
    } catch (err) {
      if (err?.name !== "AbortError") {
        console.error("Chat error:", err);
        setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Sorry, something went wrong. Please try again." }]);
      }
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) sendMessage(input);
  }

  function clearConversation() {
    setMessages([{ role: "assistant", content: "👋 Cleared. How can I help you next?" }]);
    if (typeof window !== "undefined") localStorage.removeItem(LS_KEY);
    setShowPrompts(true); // show randomized prompts again
  }

  // Contact icons (header) + More
  const ContactIcons = useMemo(
    () => (
      <div className="flex items-center gap-1.5 md:gap-2">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-1.5 rounded hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
          title="WhatsApp"
        >
          <FaWhatsapp className="w-4.5 h-4.5 text-white" />
        </a>
        <a
          href={EMAIL_LINK}
          aria-label="Email us"
          className="p-1.5 rounded hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
          title="Email"
        >
          <Mail className="w-4 h-4 text-white" />
        </a>
        <a
          href={PHONE_LINK_IN}
          aria-label="Call India"
          className="hidden md:inline-flex p-1.5 rounded hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
          title="Call (India)"
        >
          <Phone className="w-4 h-4 text-white" />
        </a>

        {/* More menu (outside click closes only this menu) */}
        <div className="relative" ref={moreRef}>
          <button
            onClick={() => setMoreOpen(v => !v)}
            className="p-1.5 rounded hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="More"
            title="More"
          >
            <MoreHorizontal className="w-4 h-4 text-white" />
          </button>
          <AnimatePresence>
            {moreOpen && (
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-200 bg-white text-gray-800 shadow-lg p-1 z-[1005]"
              >
                <button
                  onClick={() => { setMoreOpen(false); clearConversation(); }}
                  className="w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Clear conversation
                </button>
                <a
                  href={PHONE_LINK_US}
                  className="block text-sm px-3 py-2 rounded-lg hover:bg-gray-100"
                  title="Call (USA)"
                  onClick={() => setMoreOpen(false)}
                >
                  Call (USA)
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    ),
    [moreOpen, prefersReducedMotion]
  );

  // Chat panel — floating card on ALL screens
  const chatPanel = (
    <motion.div
      ref={panelRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.22 }}
      className={[
        "fixed z-[1003]",
        "right-6 bottom-24",
        "w-[min(92vw,420px)]",
        "max-h-[70vh]",
        "flex flex-col overflow-hidden",
        "bg-white border border-gray-200 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      ].join(" ")}
      role="dialog"
      aria-label="TINITIATE chat"
    >
      {/* Header with Close X on the right */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src={ASSISTANT_AVATAR} alt="" className="w-6 h-6 rounded-full bg-white/90 object-contain" />
          <div className="font-medium text-sm tracking-wide">TINITIATE Assistant</div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          {ContactIcons}
          <button
            onClick={() => setPanelOpen(false)}
            aria-label="Close chat"
            className="p-1.5 rounded hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
            title="Close"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesRef}
        className="flex-1 overflow-y-auto bg-gray-50 px-3 py-3 md:px-4 md:py-4 space-y-3"
        role="log"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} gap-2 items-end`}>
            {m.role === "assistant" && (
              <img
                src={ASSISTANT_AVATAR}
                alt=""
                className="w-7 h-7 rounded-full bg-white object-contain border border-gray-200 shadow-sm"
              />
            )}
            <div
  className={[
    "max-w-[85%] md:max-w-[80%] px-3 py-2 rounded-2xl text-[0.95rem] leading-relaxed shadow-sm",
    m.role === "user"
      ? "bg-indigo-600 text-white rounded-br-none"
      : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
  ].join(" ")}
>
  {stripContactToken(m.content)}
  {m.role === "assistant" && hasContactToken(m.content) && <ContactHandoff />}
</div>
            {m.role === "user" && (
              <div
                className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 shadow-sm grid place-items-center text-[11px] font-semibold"
                aria-hidden
              >
                {USER_AVATAR_LETTER}
              </div>
            )}
          </div>
        ))}

        {busy && (
          <div className="flex items-center gap-2 text-xs text-gray-500 pl-9">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            TINITIATE is typing…
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (random) or a small pill to reopen */}
      {!busy && (
        <div className="border-t bg-white px-3 md:px-4 py-2">
          {showPrompts ? (
            <div className="flex flex-wrap gap-2">
              {promptChoices.map((s) => (
                <button
                  key={s}
                  onClick={() => setTimeout(() => sendMessage(s), 0)}
                  className="px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-white text-gray-800 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition"
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setShowPrompts(false)}
                className="px-3 py-1.5 rounded-full text-sm border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition"
                title="Hide quick prompts"
              >
                Hide
              </button>
              {/* Optional inline handoff */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-sm border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition"
                title="WhatsApp"
              >
                WhatsApp us
              </a>
              <a
                href={EMAIL_LINK}
                className="px-3 py-1.5 rounded-full text-sm border border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100 transition"
                title="Email"
              >
                Email us
              </a>
            </div>
          ) : hasChatted ? (
            <button
              onClick={() => setShowPrompts(true)}
              className="text-xs text-gray-600 hover:text-gray-900 underline"
              title="Show quick prompts"
            >
              Show quick prompts
            </button>
          ) : null}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t bg-white px-3 md:px-4 py-2">
        <div className="flex items-end gap-2">
          <textarea
            ref={textRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Type your question… (Shift+Enter for a new line)"
            className="flex-1 resize-none text-[0.95rem] rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-500 bg-white"
          />
          <button
            type="submit"
            disabled={!input.trim() || busy}
            className={[
              "rounded-xl px-3 py-2 font-medium",
              busy ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            ].join(" ")}
            aria-label="Send message"
            title="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Scroll to bottom pill */}
      {!atBottom && (
        <button
          onClick={() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 z-[1004] bg-gray-900 text-white text-xs rounded-full px-3 py-1.5 shadow-lg hover:bg-black/90 flex items-center gap-1"
          aria-label="Scroll to newest messages"
        >
          <ChevronDown className="w-3.5 h-3.5" />
          New messages
        </button>
      )}
    </motion.div>
  );

// Single floating button with mini speed-dial (no horizontal shift, clean icon swap)
const dial = (
  <div className="fixed bottom-6 right-6 z-[1004]" ref={fabRef}>
    {/* Make a local positioning context so the menu doesn't change the container width */}
    <div className="relative w-14 h-14">
      {/* Mini dial items absolutely positioned ABOVE the button, so no layout shifts */}
      <AnimatePresence>
        {dialOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            className="absolute bottom-16 right-0 flex flex-col items-end gap-2"
          >
            <button
              onClick={openPanel}
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl px-3 py-2"
            >
              <span className="text-xs opacity-90">Ask AI</span>
              <MessageCircle className="w-5 h-5" />
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl px-3 py-2"
            >
              <span className="text-xs opacity-90">WhatsApp</span>
              <FaWhatsapp className="w-4.5 h-4.5" />
            </a>

            <a
              href={EMAIL_LINK}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl px-3 py-2"
            >
              <span className="text-xs opacity-90">Email</span>
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={PHONE_LINK_IN}
              className="group flex items-center gap-2 bg-gray-800 hover:bg-black text-white rounded-full shadow-xl px-3 py-2"
            >
              <span className="text-xs opacity-90">Call</span>
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB — absolutely anchored in this 14x14 box; icons are overlaid/crossfaded */}
      <button
        onClick={() => setDialOpen(v => !v)}
        aria-label="Open quick actions"
        className="absolute bottom-0 right-0 grid place-items-center w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {/* Only one icon visible at a time; overlay prevents any movement */}
        <span
          className={`absolute inset-0 grid place-items-center pointer-events-none transition-[opacity,transform] duration-200 ${
            dialOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          aria-hidden="true"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </span>
        <span
          className={`absolute inset-0 grid place-items-center pointer-events-none transition-[opacity,transform] duration-200 ${
            dialOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          aria-hidden="true"
        >
          <X className="w-6 h-6 text-white" />
        </span>
      </button>
    </div>
  </div>
);

  return (
    <>
      {/* One floating button (includes WhatsApp/Email/Call) */}
      {dial}

      {/* Chat panel */}
      <AnimatePresence>{panelOpen && chatPanel}</AnimatePresence>
    </>
  );
}
