import React from 'react'
import Form from '../components/HomePage/Form';
import Header from '../components/Utils/Header';

function HomePage() {

    return (
        <div className='fixed inset-0 bg-gradient-to-r from-green-500/70 to-green-900/80'>
            <div className='h-full max-w-4xl mx-auto flex flex-col p-3'>
                <Header />

                {/* Subheading */}
                <section className='bg-green-100/40 rounded-xl border border-amber-700/50 shadow-2xl shadow-amber-200/70 p-4 mb-4'>
                    <h2 className='text-xl font-extrabold text-green-900 mb-1'>Find the best crop for your soil</h2>
                    <p className='text-green-900/90 text-sm'>This website helps you determine which crop suits your soil based on its nutrient proportions. Check which soil is best for cultivation and get tailored guidance.</p>
                </section>

                {/* Main Sections */}
                <div className='flex-1 w-full flex items-center justify-center'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch'>
                        {/* Manual Entry (existing form) */}
                        <div className='w-full flex items-center justify-center'>
                            <Form />
                        </div>

                        {/* Auto-detect (coming soon) */}
                        <section className='bg-green-100/40 rounded-2xl shadow-2xl shadow-amber-200/80 border border-amber-700/50 p-6 flex flex-col gap-3 justify-around'>
                            <h3 className='text-2xl font-bold text-green-900'>Auto-detect soil (Coming soon)</h3>
                            <p className='text-green-900/90 text-sm'>We will use your location and SoilGrids API to automatically fetch soil proportions around you. Allow location access to instantly analyze your soil and get crop recommendations.</p>
                            <div className='mt-2'>
                                <button disabled className='px-4 py-2 rounded-lg bg-green-600/60 text-white font-semibold shadow-lg shadow-green-500 cursor-not-allowed'>
                                    Detect using my location
                                </button>
                                <p className='text-xs text-green-900/70 mt-2'>Feature under development. Stay tuned!</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage