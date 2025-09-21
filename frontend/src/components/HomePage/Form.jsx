import React, { useState } from 'react'
import { getDataFromModel } from '../../utils/APIcalls/getDataFromModel.js';
import { useContext } from 'react';
import { ProportionsContext } from '../../utils/Contexts/ProportionsContext.jsx';
import { useNavigate } from 'react-router-dom';

function Form() {

    const { setRecommendedCrop, nitrogen, setNitrogen, phosphorus, setPhosphorus } = useContext(ProportionsContext);
    const navigate = useNavigate();

    const proportions = {
        Nitrogen: Number(nitrogen),
        Phosporus: Number(phosphorus), // DON'T CHANGE PHOSPORUS SPELLING
        Potassium: 0,
        Temperature: 0,
        Humidity: 0,
        pH: 7,
        Rainfall: 0,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getDataFromModel(proportions);

        setRecommendedCrop(data?.prediction?.crop || "Unknown");
        setNitrogen(data.inputs.Nitrogen);
        setPhosphorus(data.inputs.Phosporus);

        setTimeout(() => {
            navigate('/result');
        }, 1500);
    }

    return (
        <form
            onSubmit={(e) => { handleSubmit(e) }}
            className="flex flex-col gap-6 bg-green-100/40 shadow-2xl shadow-amber-200/80 p-6 rounded-2xl shadow-lg max-w-md w-full"
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