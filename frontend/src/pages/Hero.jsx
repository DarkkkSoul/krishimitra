import React from 'react'

function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
                            <path d="M9 21V9h2v12" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">KrishiMitra</span>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Empowering
                            <span className="block text-green-600">Farmers</span>
                            <span className="block">for Sustainable</span>
                            <span className="block text-green-600">Agriculture</span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Our mission is to empower farmers with the resources and knowledge they need to grow their crops sustainably and effectively through smart soil analysis.
                        </p>
                        
                        <div className="flex space-x-4">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg">
                                Get Started
                            </button>
                            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
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
            <div className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">How KrishiMitra Works</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer a range of services to support farmers in every aspect of their agricultural practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Soil Analysis */}
                        <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
                                    <path d="M9 21V9h2v12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Soil Analysis</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Expert analysis and recommendations for optimizing soil health and crop production.
                            </p>
                        </div>

                        {/* Crop Recommendations */}
                        <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Recommendations</h3>
                            <p className="text-gray-600 leading-relaxed">
                                AI-powered crop suggestions based on your soil composition and local conditions.
                            </p>
                        </div>

                        {/* Support */}
                        <div className="text-center p-8 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200">
                            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Access to agricultural experts and continuous support for your farming journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-green-600 text-white py-12">
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