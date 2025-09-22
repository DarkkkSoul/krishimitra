import React, { useState } from 'react'
import { getDataFromModel } from '../../utils/APIcalls/getDataFromModel.js';
import { useContext } from 'react';
import { ProportionsContext } from '../../utils/Contexts/ProportionsContext.jsx';
import { useNavigate } from 'react-router-dom';

function Form() {

    const { recommendedCrop, setRecommendedCrop, nitrogen, setNitrogen, phosphorus, setPhosphorus, potassium, setPotassium, temperature, setTemperature, humidity, setHumidity, pH, setpH, rainfall, setRainfall } = useContext(ProportionsContext);
    const navigate = useNavigate();

    const proportions = {
        Nitrogen: Number(nitrogen),
        Phosporus: Number(phosphorus), // DON'T CHANGE PHOSPORUS SPELLING
        Potassium: Number(potassium),
        Temperature: Number(temperature),
        Humidity: Number(humidity),
        pH: Number(pH),
        Rainfall: Number(rainfall),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getDataFromModel(proportions);

        setRecommendedCrop(data?.prediction?.top3 || "Unknown");
        setNitrogen(data.inputs.Nitrogen);
        setPhosphorus(data.inputs.Phosporus);
        setPotassium(data.inputs.Potassium);
        setTemperature(data.inputs.Temperature);
        setHumidity(data.inputs.Humidity);
        setpH(data.inputs.pH);
        setRainfall(data.inputs.Rainfall);

        console.log(recommendedCrop);

        setTimeout(() => {
            navigate('/result');
        }, 1500);
    }

    return (
        <form
            onSubmit={(e) => { handleSubmit(e) }}
            className="flex flex-col gap-6 bg-green-100/40 shadow-2xl shadow-amber-200/80 p-6 rounded-2xl max-w-md w-full"
        >
            <h2 className="text-3xl text-istok-bold font-bold text-green-900 text-center mb-2">
                Input soil proportions
            </h2>

            <div className="flex flex-col gap-4 text-telugu-thin">
                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Nitrogen (N)
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 90"
                        value={nitrogen}
                        onChange={(e) => setNitrogen(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>

                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Phosphorus (P)
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={phosphorus}
                        onChange={(e) => setPhosphorus(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>

                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Humidity (H)
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={humidity}
                        onChange={(e) => setHumidity(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Potassium (K)
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={potassium}
                        onChange={(e) => setPotassium(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Rainfall
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={rainfall}
                        onChange={(e) => setRainfall(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        Temperature (T)
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-green-900 mb-2 text-md">
                        pH
                    </label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={pH}
                        onChange={(e) => setpH(e.target.value)}
                        className="border bg-green-100/40 text-green-900 px-3 pt-3 pb-2 rounded-xl focus:ring-1 focus:ring-amber-200 focus:shadow-lg focus:shadow-amber-200 outline-none transition"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-green-600 text-white font-semibold w-28 pt-2 pb-1 rounded-xl transition hover:bg-green-700 shadow-lg shadow-green-500 text-telugu-thin text-lg"
            >
                Submit
            </button>
        </form>
    )
}

export default Form