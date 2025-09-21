import React, { createContext, useState } from 'react'

export const ProportionsContext = createContext(null);

function ProportionsProvider({ children }) {

    const [recommendedCrop, setRecommendedCrop] = useState('');
    const [nitrogen, setNitrogen] = useState('');
    const [phosphorus, setPhosphorus] = useState('');

    return (
        <ProportionsContext.Provider value={{ recommendedCrop, setRecommendedCrop, nitrogen, setNitrogen, phosphorus, setPhosphorus }}>
            {children}
        </ProportionsContext.Provider>
    )
}

export default ProportionsProvider