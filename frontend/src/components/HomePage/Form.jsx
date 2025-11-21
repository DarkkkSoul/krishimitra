import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProportionsContext } from '../../utils/Contexts/ProportionsContext.jsx';
import { getDataFromModel } from '../../utils/APIcalls/getDataFromModel.js';
import { TestTube, Thermometer, Droplets, Wind, Activity } from 'lucide-react';

function Form() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        recommendedCrop, setRecommendedCrop,
        nitrogen, setNitrogen,
        phosphorus, setPhosphorus,
        potassium, setPotassium,
        temperature, setTemperature,
        humidity, setHumidity,
        pH, setpH,
        rainfall, setRainfall
    } = useContext(ProportionsContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const proportions = {
            Nitrogen: Number(nitrogen),
            Phosporus: Number(phosphorus),
            Potassium: Number(potassium),
            Temperature: Number(temperature),
            Humidity: Number(humidity),
            pH: Number(pH),
            Rainfall: Number(rainfall),
        };

        try {
            const data = await getDataFromModel(proportions);
            setRecommendedCrop(data?.prediction?.top3 || "Unknown");
            // Update context with returned data if needed, or just keep user input
            // setNitrogen(data.inputs.Nitrogen); ...

            setTimeout(() => {
                navigate('/result');
            }, 1000);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const InputField = ({ label, value, setValue, icon: Icon, placeholderValue }) => (
        <div className="flex flex-col space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-earth-700">
                {Icon && <Icon className="w-4 h-4 text-crops-600" />}
                {label}
            </label>
            <input
                type="number"
                step="0.1"
                placeholder={t('form.placeholder', { value: placeholderValue })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-white text-earth-900 focus:ring-2 focus:ring-crops-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-earth-300"
            />
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-earth-100 p-6 md:p-8 w-full">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-crops-100 rounded-xl">
                    <Activity className="w-6 h-6 text-crops-600" />
                </div>
                <h2 className="text-2xl font-bold text-earth-900">
                    {t('form.title')}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InputField
                    label={t('form.nitrogen')}
                    value={nitrogen}
                    setValue={setNitrogen}
                    icon={TestTube}
                    placeholderValue="90"
                />
                <InputField
                    label={t('form.phosphorus')}
                    value={phosphorus}
                    setValue={setPhosphorus}
                    icon={TestTube}
                    placeholderValue="42"
                />
                <InputField
                    label={t('form.potassium')}
                    value={potassium}
                    setValue={setPotassium}
                    icon={TestTube}
                    placeholderValue="43"
                />
                <InputField
                    label={t('form.ph')}
                    value={pH}
                    setValue={setpH}
                    icon={Activity}
                    placeholderValue="6.5"
                />
                <InputField
                    label={t('form.temperature')}
                    value={temperature}
                    setValue={setTemperature}
                    icon={Thermometer}
                    placeholderValue="20"
                />
                <InputField
                    label={t('form.humidity')}
                    value={humidity}
                    setValue={setHumidity}
                    icon={Wind}
                    placeholderValue="82"
                />
                <InputField
                    label={t('form.rainfall')}
                    value={rainfall}
                    setValue={setRainfall}
                    icon={Droplets}
                    placeholderValue="200"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-crops-600 hover:bg-crops-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-crops-200 hover:shadow-xl transform hover:-translate-y-0.5"
            >
                {t('form.submit')}
            </button>
        </form>
    );
}

export default Form;