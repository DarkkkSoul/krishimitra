import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sprout, BarChart3, MessageSquare, Languages } from 'lucide-react';

function Hero() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const features = [
        {
            icon: <Sprout className="w-8 h-8 text-white" />,
            title: t('features.step1'),
            desc: t('features.step1Desc'),
            color: 'bg-crops-500'
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-white" />,
            title: t('features.step2'),
            desc: t('features.step2Desc'),
            color: 'bg-blue-500'
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-white" />,
            title: t('features.step3'),
            desc: t('features.step3Desc'),
            color: 'bg-sun-500'
        },
        {
            icon: <Languages className="w-8 h-8 text-white" />,
            title: t('features.step4'),
            desc: t('features.step4Desc'),
            color: 'bg-purple-500'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-earth-50 py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-crops-200 rounded-l-full transform translate-x-1/3" />
                    <div className="absolute left-0 bottom-0 w-1/3 h-2/3 bg-sun-200 rounded-tr-full transform -translate-x-1/4 translate-y-1/4" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-bold text-earth-900 leading-tight">
                                {t('hero.title')}
                            </h1>
                            <p className="text-lg lg:text-xl text-earth-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {t('hero.description')}
                            </p>
                            <button
                                onClick={() => navigate('/home')}
                                className="inline-flex items-center gap-2 bg-crops-600 hover:bg-crops-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {t('hero.cta')}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="relative lg:h-[600px] flex items-center justify-center">
                            <div className="relative w-full max-w-lg aspect-square">
                                <div className="absolute inset-0 bg-crops-100 rounded-full opacity-20 animate-pulse" />
                                <img
                                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Sustainable farming"
                                    className="relative rounded-3xl shadow-2xl object-cover w-full h-full transform rotate-3 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-earth-900 mb-4">
                            {t('features.title')}
                        </h2>
                        <div className="w-24 h-1.5 bg-crops-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-earth-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-earth-100">
                                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-earth-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-earth-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;