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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                            <path d="M9 21V9h2v12"/>
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">KrishiMitra</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Services</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 font-medium">Contact</a>
                </div>
            </nav>

            <div className="h-full max-w-4xl mx-auto flex flex-col p-8" style={{height: 'calc(100vh - 120px)'}}>
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Agricultural Expert Assistant</h1>
                    <p className="text-gray-600">Get personalized farming advice and answers to all your agricultural questions</p>
                </div>

                <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto mb-6 rounded-xl bg-white shadow-xl p-6 hide-scrollbar border border-green-200"
                >
                    {chatHistory.length === 0 ?
                        (
                            <div className="h-full flex items-center justify-center text-center p-6">
                                <div className="max-w-2xl flex flex-col gap-6">
                                    <div className="mb-6">
                                        <img 
                                            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                            alt="Agricultural expert consultation" 
                                            className="w-full h-64 object-cover rounded-xl"
                                        />
                                    </div>
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
                                            : 'bg-gray-100 shadow-lg text-gray-800 rounded-bl-none border border-gray-200'
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
                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                    <span className="text-green-700 ml-2">KrishiMitra is thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

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