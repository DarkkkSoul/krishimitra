import React, { useContext } from 'react'
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';
import { Link } from 'react-router-dom';

function Result() {
    const { recommendedCrop, nitrogen, phosphorus } = useContext(ProportionsContext);

    const nutrientBadge = (label, value) => (
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm border border-green-200">
            <span className="text-sm font-semibold">{label}:</span>
            <span className="text-sm font-bold">{value ?? '—'}</span>
        </div>
    );

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

            <div className="min-h-full max-w-4xl mx-auto flex flex-col p-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Crop Analysis Results</h1>
                    <p className="text-xl text-gray-600">
                        Comprehensive soil analysis and personalized crop recommendations for your farm
                    </p>
                </div>

                <main className="flex-1">
                    {/* Report Card */}
                    <section className="bg-white rounded-2xl shadow-xl border border-green-200 p-8 mb-8">
                        <div className="flex items-center mb-6">
                            <img 
                                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Soil analysis report" 
                                className="w-20 h-20 object-cover rounded-xl mr-6"
                            />
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Soil & Crop Analysis Report</h2>
                                <p className="text-gray-600">Based on your soil inputs, here are personalized recommendations tailored for your farm's success.</p>
                            </div>
                        </div>

                        {/* Summary Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-2 bg-green-50 rounded-xl p-6 border border-green-200">
                                <h3 className="text-2xl font-bold text-green-800 mb-4">🌱 Recommended Crops</h3>
                                <div className="text-3xl font-bold text-green-700 mb-3">
                                    {recommendedCrop.map((crop, index) => (
                                        <span key={index} className="inline-block mr-2 mb-2 bg-green-600 text-white px-4 py-2 rounded-lg text-lg">
                                            {crop}
                                        </span>
                                    )) || '—'}
                                </div>
                                <p className="text-gray-600">These crops are perfectly suited for your soil's nitrogen and phosphorus levels, ensuring optimal growth and yield.</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-xl font-bold text-blue-800 mb-4">📊 Nutrient Profile</h3>
                                <div className="space-y-3">
                                    {nutrientBadge('Nitrogen (N)', nitrogen)}
                                    {nutrientBadge('Phosphorus (P)', phosphorus)}
                                </div>
                            </div>
                        </div>

                        {/* Guidance */}
                        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                            <h3 className="text-xl font-bold text-yellow-800 mb-4">💡 Expert Field Guidance</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start space-x-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        <span>Maintain consistent soil moisture for optimal nutrient uptake</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        <span>Prefer early morning or late evening irrigation to reduce evaporation</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start space-x-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        <span>Mulching helps retain soil moisture and improves soil health</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span className="text-green-600 font-bold">•</span>
                                        <span>Monitor for pests weekly using integrated pest management (IPM)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Organic Fertilizer Section */}
                    <section id="organic-fertilizer" className="bg-white rounded-2xl shadow-xl border border-green-200 p-8 mb-8">
                        <div className="flex items-center mb-6">
                            <img 
                                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Organic fertilizer preparation" 
                                className="w-20 h-20 object-cover rounded-xl mr-6"
                            />
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">🌿 Organic Fertilizer Recipe</h2>
                                <p className="text-gray-600">Traditional Panchagavya mix for sustainable and healthy crop growth</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4">📋 Ingredients</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        'Cow dung: 5 kg',
                                        'Cow urine: 3 liters',
                                        'Cow milk: 2 liters',
                                        'Cow curd: 2 liters',
                                        'Cow ghee: 1 kg',
                                        'Yellow bananas: 1 dozen',
                                        'Tender coconut water: 3 liters',
                                        'Sugarcane juice: 3 liters',
                                    ].map((item, i) => (
                                        <div key={i} className="bg-green-50 text-green-800 px-4 py-3 rounded-lg border border-green-200 font-medium">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">⚗️ Preparation Steps</h3>
                                <div className="space-y-4">
                                    {[
                                        'Mix cow dung with water and let it sit for a few hours.',
                                        'Add cow urine, milk, curd, ghee, bananas, coconut water, and sugarcane juice.',
                                        'Cover and ferment for 21 days, stirring twice daily.',
                                        'Strain the mixture using a cotton cloth.',
                                        'Dilute with water (30:1) to use as a liquid fertilizer.',
                                        'Apply as foliar spray or soil drench during the growing season.',
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                {idx + 1}
                                            </div>
                                            <p className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-gray-700 flex-1">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-green-50 rounded-xl p-6 border border-green-200">
                            <p className="text-green-800 font-medium text-lg">
                                💚 Incorporating this organic fertilizer can significantly improve crop yield and quality while promoting sustainable agricultural practices that benefit both your farm and the environment.
                            </p>
                        </div>
                    </section>

                    {/* CTA to Chatbot */}
                    <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-3">🤖 Need More Personalized Advice?</h3>
                                <p className="text-green-100 text-lg mb-6">
                                    Chat with our AI agricultural expert to get dynamic recommendations on irrigation schedules, pest control strategies, and nutrient adjustments specifically tailored to your crops and soil conditions.
                                </p>
                                <Link
                                    to="/chatbot"
                                    className="inline-block px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg shadow-lg hover:bg-green-50 transition-colors"
                                >
                                    Start Expert Chat →
                                </Link>
                            </div>
                            <div className="hidden lg:block ml-8">
                                <img 
                                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                                    alt="Agricultural expert consultation" 
                                    className="w-48 h-32 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Result