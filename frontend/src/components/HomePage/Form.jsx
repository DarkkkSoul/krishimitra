import React, { useState } from 'react'
import { getDataFromModel } from '../../utils/APIcalls/getDataFromModel.js';

function Form() {

    const [nitrogen, setNitrogen] = useState("");
    const [phosphorus, setPhosphorus] = useState("");
    const [recommendedCrops, setRecommendedCrops] = useState("");

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
        console.log(data);
    }

    return (
        <form
            onSubmit={(e) => { handleSubmit(e) }}
            className="flex flex-col gap-3 mb-3"
        >
            <div className="flex gap-3">
                <div className="flex flex-col">
                    <label className="text-white text-sm mb-1">Nitrogen (N)</label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 90"
                        value={nitrogen}
                        onChange={(e) => setNitrogen(e.target.value)}
                        className="border p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-white text-sm mb-1">Phosphorus (P)</label>
                    <input
                        type="number"
                        step="1"
                        placeholder="e.g. 42"
                        value={phosphorus}
                        onChange={(e) => setPhosphorus(e.target.value)}
                        className="border p-2 rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>

    )
}

export default Form