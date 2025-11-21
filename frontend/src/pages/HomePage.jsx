import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../components/HomePage/Form';
import { MapPin, CheckCircle2, Sprout } from 'lucide-react';

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-earth-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-earth-900 mb-6">
                        {t('app.subtitle')}
                    </h1>
                    <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
                        {t('hero.description')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7">
                        <Form />
                    </div>

                    {/* Right Column: Info & Features */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Auto-detect Section */}
                        <div className="bg-white rounded-2xl shadow-lg border border-earth-100 overflow-hidden">
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1581578731117-104f8a746956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Soil analysis"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className="flex items-center gap-2 text-white mb-1">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-semibold text-lg">{t('home.autoDetect')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-earth-600 mb-6 leading-relaxed">
                                    {t('home.autoDetectDesc')}
                                </p>
                                <button disabled className="w-full py-3 px-4 bg-earth-100 text-earth-400 rounded-xl font-medium cursor-not-allowed flex items-center justify-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    Detect Location
                                </button>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-crops-50 rounded-2xl border border-crops-100 p-8">
                            <h3 className="text-xl font-bold text-crops-900 mb-6 flex items-center gap-2">
                                <Sprout className="w-6 h-6 text-crops-600" />
                                {t('home.whyChoose')}
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    t('features.step2Desc'),
                                    t('features.step4Desc'),
                                    t('features.step3Desc')
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-crops-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-earth-700 leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;