import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactMarkdown from "react-markdown";
import { generateAnswer } from '../utils/APIcalls/generateAnswer.js';
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';
import Header from '../components/Utils/Header';

function ChatBot() {

    const chatContainerRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    const { recommendedCrop, nitrogen, phosphorus } = useContext(ProportionsContext);


    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, generatingAnswer]);


    const handleSubmit = async (e, question) => {
        e.preventDefault();
        try {
            const currentQuestion = question;

            setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
            setGeneratingAnswer(true);

            console.log(recommendedCrop, nitrogen, phosphorus);

            const aiResponse = await generateAnswer(currentQuestion, recommendedCrop, nitrogen, phosphorus);

            setAnswer(aiResponse);
            setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);

            setGeneratingAnswer(false);
            setQuestion('');
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
    }

    return (
        <div className="fixed inset-0 bg-gradient-to-r from-green-500/70 to-green-900/80">
            <div className="h-full max-w-4xl mx-auto flex flex-col p-3">

                <Header />

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

                <form onSubmit={(e) => { handleSubmit(e, question) }} className="bg-green-100/40 rounded-lg shadow-xl shadow-amber-300/40 border border-amber-700/50 p-4">
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