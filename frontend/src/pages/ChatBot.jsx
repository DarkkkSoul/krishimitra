import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactMarkdown from "react-markdown";
import { generateAnswer } from '../utils/APIcalls/generateAnswer.js';
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';

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

            console.log('recommendedCrop', recommendedCrop);

            setQuestion('');
            const aiResponse = await generateAnswer(currentQuestion, recommendedCrop, nitrogen, phosphorus);

            setAnswer(aiResponse);
            setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);

            setGeneratingAnswer(false);
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
    }

    return (
        <div className="h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col">
            {/* Header */}
            <div className="flex-shrink-0 max-w-4xl mx-auto w-full px-8 pt-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Agricultural Expert Assistant</h1>
                    <p className="text-gray-600">Get personalized farming advice and answers to all your agricultural questions</p>
                </div>
            </div>

            {/* Chat Container - Scrollable */}
            <div className="flex-1 max-w-4xl mx-auto w-full px-8 overflow-hidden">
                <div
                    ref={chatContainerRef}
                    className="h-full overflow-y-auto rounded-xl bg-white shadow-xl p-6 hide-scrollbar border border-green-200"
                >
                    {chatHistory.length === 0 ?
                        (
                            <div className="h-full flex items-center justify-center text-center p-6">
                                <div className="max-w-2xl flex flex-col gap-6">
                                    <h2 className="text-3xl font-bold text-gray-800">Welcome to KrishiMitra Chat</h2>
                                    <p className="text-xl text-gray-600">
                                        I'm your agricultural expert assistant, ready to help you with farming guidance, crop management, pest control, and sustainable agriculture practices.
                                    </p>
                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <h3 className="font-semibold text-green-800 mb-2">You can ask me about:</h3>
                                        <ul className="text-left text-gray-700 space-y-1">
                                            <li>• Crop-specific farming techniques</li>
                                            <li>• Pest and disease management</li>
                                            <li>• Irrigation and water management</li>
                                            <li>• Organic fertilizers and soil health</li>
                                            <li>• Weather-based farming decisions</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-500">
                                        Just type your question below and press Enter or click Send!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {chatHistory.map((chat, index) => (
                                    <div key={index} className={`mb-6 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block max-w-[80%] p-4 rounded-xl overflow-auto hide-scrollbar ${chat.type === 'question'
                                            ? 'bg-green-600 shadow-lg text-white rounded-br-none'
                                            : 'bg-green-100 shadow-lg text-gray-800 rounded-bl-none border border-gray-200'
                                            }`}>
                                            <ReactMarkdown className="overflow-auto hide-scrollbar prose prose-sm max-w-none">{chat.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    {generatingAnswer && (
                        <div className="text-left">
                            <div className="inline-block bg-green-100 border border-green-200 p-4 rounded-xl animate-pulse">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <span className="text-green-700 ml-2">KrishiMitra is thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Input Area at Bottom */}
            <div className="flex-shrink-0 max-w-4xl mx-auto w-full px-8 pb-8 pt-4">
                <form onSubmit={(e) => { handleSubmit(e, question) }} className="bg-white rounded-xl shadow-xl border border-green-200 p-4">
                    <div className="flex gap-4">
                        <textarea
                            required
                            className="flex-1 border-2 border-gray-200 rounded-lg p-3 outline-none focus:ring-2 resize-none focus:ring-green-500 focus:border-green-500 transition-colors"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ask me anything about farming, crops, or agriculture..."
                            rows="2"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e, question);
                                }
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg transition-colors ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={generatingAnswer}
                        >
                            {generatingAnswer ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBot