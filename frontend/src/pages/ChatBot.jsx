import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import ReactMarkdown from "react-markdown";

function ChatBot() {

    const chatContainerRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, generatingAnswer]);

    async function generateAnswer(e) {
        e.preventDefault();
        if (!question.trim()) return;

        setGeneratingAnswer(true);
        const currentQuestion = question;
        setQuestion("");

        setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);

        // here think about proportions.

        const data = await getDataFromModel(proportions);
        const recommended = rec?.prediction?.crop || "Unknown";
        const nitrogen = rec.inputs.Nitrogen;
        const phosphorus = rec.inputs.Phosporus;

        const fullPrompt = `You are an AI-powered agricultural assistant for farmers. Your primary function is to provide crop recommendations and agricultural advice. When given data about soil composition, analyze it and recommend suitable crops. Maintain a helpful, informative, and professional tone. Answer any general agricultural questions the user may have, but prioritize the data-driven recommendations.
    Here is the soil data:
    - Nitrogen: ${nitrogen}
    - Phosphorus: ${phosphorus}
    The recommended crops are: ${recommended}.
    Now, please answer the user's question:
    ${currentQuestion}`;

        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
                method: "post",
                data: {
                    contents: [{
                        role: "user",
                        parts: [{ text: fullPrompt }]
                    }],
                },
            });

            const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
            setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
            setAnswer(aiResponse);
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
        setGeneratingAnswer(false);
    }

    return (
        <div className="fixed inset-0 bg-gradient-to-r from-green-500/70 to-green-900/80">
            <div className="h-full max-w-4xl mx-auto flex flex-col p-3">

                <header className="text-center py-2">
                    <h1 className="text-4xl font-bold text-left text-white transition-colors text-telugu tracking-wide">
                        <span className="text-green-900">Krishi</span>Mitra
                    </h1>
                </header>

                <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto mb-4 rounded-lg bg-green-100/40 shadow-2xl shadow-amber-200/80 p-4 hide-scrollbar border border-amber-700/50"
                >
                    {chatHistory.length === 0 ?
                        (
                            <div className="h-full flex items-center justify-center text-center p-6">
                                <div className="bg-green-300/ rounded-xl p-8 max-w-2xl text-telugu-thin flex flex-col gap-2">
                                    <h2 className="text-3xl font-black text-white">Welcome to KrishiMitra</h2>
                                    <p className="text-white">
                                        I'm here to help you with anything related to agriculture.
                                    </p>
                                    <p className="text-white text-sm">
                                        Just type your question below and press Enter or click Send!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {chatHistory.map((chat, index) => (
                                    <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${chat.type === 'question'
                                            ? 'bg-green-700/90 shadow-md text-white rounded-br-none'
                                            : 'bg-green-200/80 shadow-md text-gray-800 rounded-bl-none'
                                            }`}>
                                            <ReactMarkdown className="overflow-auto hide-scrollbar">{chat.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    {generatingAnswer && (
                        <div className="text-left">
                            <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                                Thinking...
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={generateAnswer} className="bg-green-100/40 rounded-lg shadow-xl shadow-amber-300/40 border border-amber-700/50 p-4">
                    <div className="flex gap-3">
                        <textarea
                            required
                            className="flex-1 border-2 border-green-700/60 rounded p-2 outline-none focus:ring-1 resize-none focus:ring-amber-200 focus:border-none focus:shadow-md bg-green-100/40"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ask anything..."
                            rows="2"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    generateAnswer(e);
                                }
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            className={`px-7 pt-1 items-center mt-3.5 h-10 bg-green-600 text-lg text-telugu-thin tracking-wider text-white font-bold  rounded-md hover:bg-green-700 shadow-lg shadow-green-500 transition-colors ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={generatingAnswer}
                        >
                            Send
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ChatBot