import { useContext, useEffect, useRef, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useTranslation } from 'react-i18next';
import { generateAnswer } from '../utils/APIcalls/generateAnswer.js';
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';
import { Send, Bot, User, Loader2, Sparkles, Mic, Volume2 } from 'lucide-react';

function ChatBot() {
    const { t, i18n } = useTranslation();
    const chatContainerRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([]);
    const [question, setQuestion] = useState("");

    const [generatingAnswer, setGeneratingAnswer] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [canUseSTT, setCanUseSTT] = useState(false);
    const recognitionRef = useRef(null);
    const speakingRef = useRef(false);
    const voicesRef = useRef([]);
    const lastSpeakAtRef = useRef(0);

    const langTagMap = {
        en: 'en-US',
        hi: 'hi-IN',
        ml: 'ml-IN',
        te: 'te-IN',
        ta: 'ta-IN',
        kn: 'kn-IN',
    };

    const { recommendedCrop, nitrogen, phosphorus } = useContext(ProportionsContext);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, generatingAnswer]);

    useEffect(() => {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        setCanUseSTT(!!SR);
        return () => {
            if (recognitionRef.current) recognitionRef.current.stop();
            window.speechSynthesis && window.speechSynthesis.cancel();
        };
    }, []);

    useEffect(() => {
        const loadVoices = () => {
            voicesRef.current = window.speechSynthesis?.getVoices?.() || [];
        };
        loadVoices();
        window.speechSynthesis?.addEventListener?.('voiceschanged', loadVoices);
        return () => window.speechSynthesis?.removeEventListener?.('voiceschanged', loadVoices);
    }, []);

    const selectVoice = (lang) => {
        const voices = voicesRef.current || [];
        const exact = voices.find(v => v.lang?.toLowerCase() === (lang || '').toLowerCase());
        if (exact) return exact;
        const base = (lang || '').slice(0, 2);
        return voices.find(v => v.lang?.slice(0, 2) === base) || null;
    };

    const cleanText = (text) =>
        (text || '')
            .replace(/```[\s\S]*?```/g, '')
            .replace(/[`*_>#-]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

    const splitIntoChunks = (text, size = 180) => {
        const parts = text.split(/([.!?]+)\s+/);
        const chunks = [];
        let buf = '';
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (!part) continue;
            const add = buf ? buf + ' ' + part : part;
            if (add.length > size) {
                if (buf) chunks.push(buf);
                buf = part;
            } else {
                buf = add;
            }
        }
        if (buf) chunks.push(buf);
        return chunks;
    };

    const startListening = () => {
        if (isListening) return;
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) return;
        const rec = new SR();
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        rec.lang = langTagMap[i18n.language] || 'en-US';
        rec.onresult = (e) => {
            let final = '';
            let interim = '';
            for (let i = e.resultIndex; i < e.results.length; ++i) {
                const txt = e.results[i][0].transcript;
                if (e.results[i].isFinal) final += txt;
                else interim += txt;
            }
            setQuestion((prev) => (final ? (prev ? prev + ' ' : '') + final : interim || prev));
        };
        rec.onnomatch = () => setIsListening(false);
        rec.onstart = () => setIsListening(true);
        rec.onend = () => setIsListening(false);
        rec.onerror = (e) => {
            console.warn('Speech error:', e.error);
            if (e.error === 'network') {
                alert('Speech recognition is blocked by the browser. In Brave, enable Google speech services, allow microphone, or lower Shields for this site.');
            }
            setIsListening(false);
        };
        recognitionRef.current = rec;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        rec.start();
    };

    const stopListening = () => {
        if (recognitionRef.current) recognitionRef.current.stop();
    };

    const speak = (text) => {
        if (!window.speechSynthesis || !text) return;
        const now = Date.now();
        if (now - lastSpeakAtRef.current < 300) return; // debounce rapid clicks
        lastSpeakAtRef.current = now;

        // Stop STT and any ongoing TTS
        if (recognitionRef.current) recognitionRef.current.stop();
        window.speechSynthesis.cancel();

        const lang = langTagMap[i18n.language] || 'en-US';
        const cleaned = cleanText(text);
        const chunks = splitIntoChunks(cleaned);

        const play = (idx) => {
            if (idx >= chunks.length) { speakingRef.current = false; return; }
            const u = new SpeechSynthesisUtterance(chunks[idx]);
            u.lang = lang;
            u.rate = 0.6;
            u.pitch = 1;
            u.volume = 1.1;
            const voice = selectVoice(lang);
            if (voice) u.voice = voice;
            u.onend = () => play(idx + 1);
            window.speechSynthesis.speak(u);
        };

        speakingRef.current = true;
        play(0);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        const currentQuestion = question;
        setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
        setGeneratingAnswer(true);
        setQuestion('');

        try {
            const aiResponse = await generateAnswer(currentQuestion, recommendedCrop, nitrogen, phosphorus, i18n.language);
            setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
        } catch (error) {
            console.error(error);
            setChatHistory(prev => [...prev, { type: 'answer', content: "Sorry - Something went wrong. Please try again!" }]);
        } finally {
            setGeneratingAnswer(false);
        }
    };

    return (
        <div className="h-[calc(100vh-64px)] bg-earth-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-earth-100 p-4 shadow-sm flex-shrink-0">
                <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="p-2 bg-crops-100 rounded-lg">
                        <Bot className="w-6 h-6 text-crops-600" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-earth-900">{t('chatbot.title')}</h1>
                        <p className="text-sm text-earth-500">{t('chatbot.subtitle')}</p>
                    </div>
                </div>
            </div>

            {/* Chat Container */}
            <div className="flex-1 overflow-hidden relative">
                <div
                    ref={chatContainerRef}
                    className="h-full overflow-y-auto p-4 md:p-8 space-y-6 max-w-4xl mx-auto"
                >
                    {chatHistory.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-80">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                <Sparkles className="w-10 h-10 text-crops-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-earth-900 mb-3">{t('chatbot.welcomeTitle')}</h2>
                            <p className="text-earth-600 max-w-md">
                                {t('chatbot.welcomeDesc')}
                            </p>
                        </div>
                    ) : (
                        chatHistory.map((chat, index) => (
                            <div
                                key={index}
                                className={`flex gap-4 ${chat.type === 'question' ? 'justify-end' : 'justify-start'}`}
                            >
                                {chat.type === 'answer' && (
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-earth-100 flex-shrink-0 mt-1">
                                        <Bot className="w-5 h-5 text-crops-600" />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] md:max-w-[70%] p-4 rounded-2xl shadow-sm ${chat.type === 'question'
                                        ? 'bg-crops-600 text-white rounded-br-none'
                                        : 'bg-white text-earth-800 border border-earth-100 rounded-bl-none'
                                        }`}
                                >
                                    <ReactMarkdown className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-gray-800 prose-pre:text-white">
                                        {chat.content}
                                    </ReactMarkdown>
                                    {chat.type === 'answer' && (
                                        <div className="mt-2 flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => speak(chat.content)}
                                                className="p-1.5 rounded-md border border-earth-200 text-earth-700 hover:bg-earth-50"
                                                disabled={generatingAnswer}
                                            >
                                                <Volume2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {chat.type === 'question' && (
                                    <div className="w-8 h-8 bg-crops-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <User className="w-5 h-5 text-crops-700" />
                                    </div>
                                )}
                            </div>
                        ))
                    )}

                    {generatingAnswer && (
                        <div className="flex gap-4 justify-start">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-earth-100 flex-shrink-0">
                                <Bot className="w-5 h-5 text-crops-600" />
                            </div>
                            <div className="bg-white border border-earth-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                                <Loader2 className="w-4 h-4 text-crops-600 animate-spin" />
                                <span className="text-sm text-earth-500">{t('chatbot.sending')}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-earth-100 p-4 flex-shrink-0">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder={t('chatbot.inputPlaceholder')}
                            className="w-full pl-6 pr-28 py-4 bg-earth-50 border-none rounded-xl focus:ring-2 focus:ring-crops-500 focus:bg-white transition-all duration-200 placeholder:text-earth-400"
                            disabled={generatingAnswer}
                        />
                        <button
                            type="button"
                            onClick={isListening ? stopListening : startListening}
                            disabled={!canUseSTT || generatingAnswer}
                            className="absolute right-12 p-2 bg-white border border-earth-200 text-earth-700 rounded-lg hover:bg-earth-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="voice input"
                            title={canUseSTT ? (isListening ? 'Stop listening' : 'Speak') : 'Voice input not supported'}
                        >
                            <Mic className={`w-5 h-5 ${isListening ? 'text-crops-600' : ''}`} />
                        </button>
                        <button
                            type="submit"
                            disabled={generatingAnswer || !question.trim()}
                            className="absolute right-2 p-2 bg-crops-600 text-white rounded-lg hover:bg-crops-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;