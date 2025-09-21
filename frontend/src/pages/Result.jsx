import React, { useContext } from 'react'
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';
import { Link } from 'react-router-dom';
import Header from '../components/Utils/Header';

function Result() {
    const { recommendedCrop, nitrogen, phosphorus } = useContext(ProportionsContext);

    const nutrientBadge = (label, value) => (
        <div className="flex items-center gap-2 bg-green-200/70 text-green-900 px-3 py-1 rounded-full shadow-sm border border-amber-700/30">
            <span className="text-sm font-semibold">{label}:</span>
            <span className="text-sm font-bold">{value ?? '—'}</span>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-gradient-to-r from-green-500/70 to-green-900/80 overflow-y-auto">
            <div className="min-h-full max-w-4xl mx-auto flex flex-col p-4 sm:p-6 lg:p-2">

                <Header />

                <main className="flex-1">
                    {/* Report Card */}
                    <section className="bg-green-100/40 rounded-2xl shadow-2xl shadow-amber-200/80 border border-amber-700/50 p-6 sm:p-8 mb-8">
                        <h2 className="text-3xl font-extrabold text-green-900 mb-1">Soil & Crop Report Card</h2>
                        <p className="text-green-900/80 mb-6">Based on your soil inputs, here is a concise summary and recommendations tailored for your farm.</p>

                        {/* Summary Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                            <div className="md:col-span-2 bg-white/60 rounded-xl p-4 border border-amber-700/30 shadow">
                                <h3 className="text-xl font-semibold text-green-900 mb-2">Recommended Crop</h3>
                                <p className="text-2xl font-black text-green-800">
                                    {recommendedCrop || '—'}
                                </p>
                                <p className="text-sm text-green-900/70 mt-1">Chosen to align with your current nitrogen and phosphorus levels.</p>
                            </div>
                            <div className="bg-white/60 rounded-xl p-4 border border-amber-700/30 shadow flex flex-col gap-3">
                                <h3 className="text-xl font-semibold text-green-900">Nutrient Snapshot</h3>
                                <div className="flex flex-wrap gap-2">
                                    {nutrientBadge('Nitrogen (N)', nitrogen)}
                                    {nutrientBadge('Phosphorus (P)', phosphorus)}
                                </div>
                            </div>
                        </div>

                        {/* Guidance */}
                        <div className="bg-green-50/80 rounded-xl p-4 border border-amber-700/30">
                            <h3 className="text-lg font-semibold text-green-900 mb-2">Field Guidance</h3>
                            <ul className="list-disc pl-5 space-y-1 text-green-900/90">
                                <li>Maintain consistent soil moisture for optimal nutrient uptake.</li>
                                <li>Prefer early morning or late evening irrigation to reduce evaporation.</li>
                                <li>Mulching helps retain soil moisture and improves soil health.</li>
                                <li>Monitor for pests weekly; adopt integrated pest management (IPM) practices.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Organic Fertilizer Section */}
                    <section id="organic-fertilizer" className="bg-green-100/40 rounded-2xl shadow-2xl shadow-amber-200/80 border border-amber-700/50 p-6 sm:p-8 mb-10">
                        <h2 className="text-2xl font-extrabold text-green-900 mb-4">Organic Fertilizer: Panchagavya Mix</h2>

                        <h3 className="text-xl font-bold text-green-900 mb-3">Ingredients</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
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
                                <div key={i} className="bg-white/70 text-green-900 px-4 py-2 rounded-full shadow border border-amber-700/30">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-green-900 mb-3">Steps to Prepare Organic Fertilizer</h3>
                        <div className="relative pl-3 sm:pl-4">
                            {[
                                'Mix cow dung with water and let it sit for a few hours.',
                                'Add cow urine, milk, curd, ghee, bananas, coconut water, and sugarcane juice.',
                                'Cover and ferment for 21 days, stirring twice daily.',
                                'Strain the mixture using a cotton cloth.',
                                'Dilute with water (30:1) to use as a liquid fertilizer.',
                                'Apply as foliar spray or soil drench during the growing season.',
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3 sm:gap-4 mb-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-green-700 shadow"></div>
                                    <p className="bg-white/70 border border-amber-700/30 rounded-lg px-4 py-2 text-green-900 shadow">
                                        <span className="font-semibold text-green-800 mr-2">{idx + 1}.</span>
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4 text-green-900/90">Incorporating organic fertilizer can significantly improve crop yield and quality, promoting sustainable agricultural practices.</p>
                    </section>

                    {/* CTA to Chatbot */}
                    <section className="bg-green-100/50 rounded-2xl shadow-xl shadow-amber-200/60 border border-amber-700/50 p-6 sm:p-8 mb-12">
                        <h3 className="text-2xl font-extrabold text-green-900 mb-2">Need tailored advice?</h3>
                        <p className="text-green-900/90 mb-4">Chat with KrishiMitra to get dynamic recommendations on irrigation schedules, pest control, and nutrient adjustments based on your crop and soil profile.</p>
                        <Link
                            to="/chatbot"
                            className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500 hover:bg-green-700 transition"
                        >
                            Go to Chatbot
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Result