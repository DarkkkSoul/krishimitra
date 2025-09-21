import React from 'react'
import Form from '../components/HomePage/Form';
import Header from '../components/Utils/Header';

function HomePage() {

    return (
        <div className='fixed inset-0 bg-gradient-to-r from-green-500/70 to-green-900/80'>
            <div className='h-full max-w-4xl mx-auto flex flex-col p-3'>
                <Header />
                <div className='flex-1 w-full flex items-center justify-center'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default HomePage