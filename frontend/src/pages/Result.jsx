import React, { useContext } from 'react';
import { ProportionsContext } from '../utils/Contexts/ProportionsContext.jsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sprout, FileText, Droplets, Thermometer, Wind, ArrowRight, MessageSquare } from 'lucide-react';

function Result() {
    const { t } = useTranslation();
    const { recommendedCrop, nitrogen, phosphorus } = useContext(ProportionsContext);

    const NutrientBadge = ({ label, value, icon: Icon, color }) => (
        <div className={`flex items-center gap-3 p-4 rounded-xl border ${color} bg-white shadow-sm`}>
            <div className={`p-2 rounded-lg ${color.replace('border', 'bg').replace('200', '100')}`}>
                <Icon className={`w-5 h-5 ${color.replace('border-', 'text-').replace('200', '700')}`} />
            </div>
            <div>
                <p className="text-sm text-earth-500 font-medium">{label}</p>
                <p className="text-lg font-bold text-earth-900">{value ?? '—'}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-earth-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                        {t('result.title')}
                    </h1>
                    <p className="text-lg text-earth-600">
                        {t('result.subtitle')}
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Report Card */}
                    <section className="bg-white rounded-2xl shadow-xl border border-earth-100 overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="p-4 bg-crops-100 rounded-2xl">
                                    <FileText className="w-8 h-8 text-crops-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-earth-900 mb-2">
                                        {t('result.reportTitle')}
                                    </h2>
                                    <p className="text-earth-600">
                                        {t('result.reportDesc')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Recommended Crops */}
                                <div className="lg:col-span-2 bg-crops-50 rounded-2xl p-6 border border-crops-100">
                                    <h3 className="text-xl font-bold text-crops-900 mb-6 flex items-center gap-2">
                                        <Sprout className="w-5 h-5" />
                                        {t('result.recommendedCrops')}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {recommendedCrop && recommendedCrop.length > 0 ? (
                                            recommendedCrop.map((crop, index) => (
                                                <span key={index} className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-crops-700 font-bold text-lg shadow-sm border border-crops-100">
                                                    {crop}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-earth-500 italic">No recommendations available</span>
                                        )}
                                    </div>
                                </div>

                                {/* Nutrient Profile */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Thermometer className="w-5 h-5 text-earth-600" />
                                        {t('result.nutrientProfile')}
                                    </h3>
                                    <NutrientBadge
                                        label="Nitrogen (N)"
                                        value={nitrogen}
                                        icon={Sprout}
                                        color="border-blue-200"
                                    />
                                    <NutrientBadge
                                        label="Phosphorus (P)"
                                        value={phosphorus}
                                        icon={Sprout}
                                        color="border-purple-200"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-earth-900 rounded-2xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                                    <MessageSquare className="w-8 h-8 text-crops-400" />
                                    {t('result.chatCtaTitle')}
                                </h3>
                                <p className="text-earth-300 text-lg max-w-xl">
                                    {t('result.chatCtaDesc')}
                                </p>
                            </div>
                            <Link
                                to="/chatbot"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-crops-600 hover:bg-crops-700 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                            >
                                {t('result.chatCtaButton')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Result;