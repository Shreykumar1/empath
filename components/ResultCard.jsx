import React from 'react'

const ResultCard = ({text}) => {
    return (
        <div>
            <div className="w-full p-4 text-center  sm:p-8 ">
                <h5 className="mb-2 text-3xl font-bold text-gray-800 ">{text}</h5>
            </div>
        </div>
    )
}

export default ResultCard