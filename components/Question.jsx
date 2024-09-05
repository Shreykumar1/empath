import React from 'react'
import CheckboxContainer from './CheckboxContainer'

const Question = ({personality,setPersonalityQuestions}) => {
    const {id,question} = personality;
    return (
        <>
            <div className="card bg-base-100 w-full shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span>{id}.</span>{question}</h2>
                    <CheckboxContainer personality={personality} setPersonalityQuestions={setPersonalityQuestions}/>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Question