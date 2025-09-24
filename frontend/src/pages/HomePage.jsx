import React from 'react'
import Form from '../components/HomePage/Form';

function HomePage() {

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

            <div className='h-full max-w-4xl mx-auto flex flex-col p-8'>
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Smart Soil Analysis for Better Crops</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the perfect crops for your soil with our advanced AI-powered analysis. Get personalized recommendations based on your soil's unique characteristics.
                    </p>
                </div>

                {/* Subheading */}
                <section className='bg-white rounded-xl border border-green-200 shadow-xl p-6 mb-8'>
                    <h2 className='text-2xl font-bold text-green-800 mb-3'>Find the best crop for your soil</h2>
                    <p className='text-gray-600 text-lg leading-relaxed'>This intelligent system helps you determine which crops suit your soil based on nutrient proportions, environmental conditions, and local farming practices. Get tailored guidance for optimal cultivation results.</p>
                </section>

                {/* Main Sections */}
                <div className='flex-1 w-full flex items-start justify-center'>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                        {/* Manual Entry (existing form) */}
                        <div className='w-full'>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Manual Soil Analysis</h3>
                                <p className="text-gray-600">Enter your soil parameters manually for precise crop recommendations.</p>
                            </div>
                            <Form />
                        </div>

                        {/* Auto-detect and additional info */}
                        <div className="space-y-6">
                            {/* Auto-detect (coming soon) */}
                            <section className='bg-white rounded-xl shadow-xl border border-green-200 p-6'>
                                <div className="mb-4">
                                    <img 
                                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                        alt="GPS location detection for soil analysis" 
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className='text-2xl font-bold text-gray-800 mb-3'>Auto-detect soil (Coming soon)</h3>
                                <p className='text-gray-600 mb-4'>We will use your location and SoilGrids API to automatically fetch soil proportions around you. Allow location access to instantly analyze your soil and get crop recommendations.</p>
                                <div className='mt-4'>
                                    <button disabled className='w-full px-6 py-3 rounded-lg bg-gray-400 text-white font-semibold cursor-not-allowed mb-3'>
                                        Detect using my location
                                    </button>
                                    <p className='text-sm text-gray-500 text-center'>Feature under development. Stay tuned!</p>
                                </div>
                            </section>

                            {/* Benefits Section */}
                            <section className='bg-green-50 rounded-xl border border-green-200 p-6'>
                                <h3 className='text-xl font-bold text-green-800 mb-4'>Why Choose KrishiMitra?</h3>
                                <ul className='space-y-3'>
                                    <li className='flex items-start space-x-3'>
                                        <div className='w-2 h-2 bg-green-600 rounded-full mt-2'></div>
                                        <span className='text-gray-700'>AI-powered crop recommendations based on scientific data</span>
                                    </li>
                                    <li className='flex items-start space-x-3'>
                                        <div className='w-2 h-2 bg-green-600 rounded-full mt-2'></div>
                                        <span className='text-gray-700'>Personalized farming guidance in your local language</span>
                                    </li>
                                    <li className='flex items-start space-x-3'>
                                        <div className='w-2 h-2 bg-green-600 rounded-full mt-2'></div>
                                        <span className='text-gray-700'>Expert chatbot support for all your farming queries</span>
                                    </li>
                                    <li className='flex items-start space-x-3'>
                                        <div className='w-2 h-2 bg-green-600 rounded-full mt-2'></div>
                                        <span className='text-gray-700'>Sustainable agriculture practices and organic solutions</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage