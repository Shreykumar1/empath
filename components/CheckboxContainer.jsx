'use client'
import React, { useState } from 'react'

const CheckboxContainer = ({ personality, setPersonalityQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleCheckboxChange = (val) => {
        setSelectedOption(val);
        setPersonalityQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === personality.id ? { ...question, value: val } : question
            )
        );

    };
    return (
        <>
            <div className='flex justify-around place-items-center pt-5'>
                <h1 className='text-2xl hidden lg:block text-green-800 font-bold'>Agree</h1>
                <div className='flex w-max place-items-center gap-1 md:gap-8'>
                    <input type="checkbox" checked={selectedOption === 1} className='checkbox border-4 checkbox-success w-12 h-12  md:w-16 md:h-16 rounded-full' onChange={() => handleCheckboxChange(1)} />
                    <input type="checkbox" checked={selectedOption === 2} className='checkbox  border-4 checkbox-success w-8 h-8 md:w-12 md:h-12 rounded-full' onChange={() => handleCheckboxChange(2)} />
                    <input type="checkbox" checked={selectedOption === 3} className='checkbox  border-4 w-6 h-6 md:w-8 md:h-8 rounded-full' onChange={() => handleCheckboxChange(3)} />
                    <input type="checkbox" checked={selectedOption === 4} className='checkbox  border-4 checkbox-warning w-8 h-8 md:w-12 md:h-12 rounded-full' onChange={() => handleCheckboxChange(4)} />
                    <input type="checkbox" checked={selectedOption === 5} className='checkbox border-4  checkbox-warning w-12 h-12 md:w-16 md:h-16 rounded-full' onChange={() => handleCheckboxChange(5)} />
                </div>
                <h1 className='text-2xl hidden lg:block text-red-800 font-bold'>Disagree</h1>
            </div>
            <div className="flex justify-between">
                <h6 className='text-sm lg:hidden block sm:text-lg  text-green-800 font-bold'>Agree</h6>
                <h6 className='text-sm lg:hidden block sm:text-lg text-red-800 font-bold'>Disagree</h6>
            </div>
        </>

    )
}

export default CheckboxContainer