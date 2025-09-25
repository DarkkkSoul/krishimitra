import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            {/* Navigation */}
            <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto">
                <span className="text-2xl font-bold text-gray-800">KrishiMitra</span>
            </nav>

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-9">
                        <h1 className="text-5xl lg:text-5xl font-bold text-gray-800">
                            Empowering
                            <span className="block text-green-600">Farmers</span>
                            <span className="block">for Sustainable</span>
                            <span className="block text-green-600">Agriculture</span>
                        </h1>

                        <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                            Our mission is to empower farmers with the resources and knowledge they need to grow their crops sustainably and effectively through smart soil analysis.
                        </p>

                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-lg" onClick={() => navigate('/home')}>
                            Get Started
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Sustainable farming with green crops"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">How KrishiMitra Works</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our intelligent system guides you through every step of crop selection and farming decisions, all in your local language.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Input Soil Data</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enter your soil's nitrogen, phosphorus, potassium levels, pH, temperature, humidity, and rainfall data.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Crop Recommendation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our advanced AI analyzes your data and recommends the top 3 most suitable crops for your soil conditions.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Chatbot Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get detailed farming guidance, pest control tips, and irrigation schedules through our intelligent chatbot.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Local Language Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                All recommendations and guidance are provided in your local language for better understanding and implementation.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-600 mb-6">
                            From soil analysis to harvest success - KrishiMitra is your complete agricultural companion that understands your local farming needs.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg" onClick={() => navigate('/home')}>
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-green-600 text-white py-4">
                <div className="max-w-4xl mx-auto px-8 flex flex-row justify-between items-center">
                    <div className="text-2xl font-bold">
                        KrishiMitra
                    </div>
                    <p className="text-green-200">&copy; 2025. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Hero