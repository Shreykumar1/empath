'use client'
import React, { useState } from 'react'
import Question from './Question'
import data from '@/app/data'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResultCard from './ResultCard';
import PersonalityCard from './PersonalityCard';
import PersonalityTraitsGrid from './PersonalityTraitsGrid';
import personalityDetails from './Personality';

const Questions = () => {
  const [personalityQuestions, setPersonalityQuestions] = useState(data);
  const [mbti, setMbti] = useState(false);
  const [personalityData, setPersonalityData] = useState(null);

  const handleResult = async () => {
    // Check all the checkboes are checked
    const hasNullValue = personalityQuestions.some((question) => {
      if (question.value === null) {
        toast.error(`Please answer question #${question.id} before proceeding.`);
        return true;
      }
      return false;
    });
    if (hasNullValue) {
      // Early return or handle the case when a null value is found
      return;
    }

    // POST Api to next.js route 
    // const url = 'http://localhost:3000'
    const url = 'https://empath-beta.vercel.app'
    try {
      const response = await fetch(`${url}/api/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: personalityQuestions }),
      });

      const result = await response.json();

      const dataPerson = personalityDetails.find(obj => obj.type === result.data.mbti);
      setPersonalityData(dataPerson);
      setMbti(true);

    } catch (error) {
      console.error('Error:', error);
    }

  }


  return (
    <>
      {
        mbti === false ? <>
          <div className="py-10 px-4 md:px-10 md:py-20 flex justify-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-gray-900 leading-tight md:leading-none">
              Explore Your Personality with Our Questions
            </h1>
          </div>
          <div className='max-w-5xl w-5/6 md:w-2/3 flex flex-col'>
            <ToastContainer position='top-center' />
            {data.map((personality) => {
              return <Question key={personality.id} personality={personality} setPersonalityQuestions={setPersonalityQuestions} />
            })}
            <button className='btn btn-primary mb-12' onClick={() => handleResult()}>Result</button>
          </div></> :
          <>
            <div className='max-w-6xl w-3/4 '>
              <a href='/test' className='underline text-lg pt-3'>Back</a>
              <ResultCard text={"RESULT"} />
              <PersonalityCard personality={personalityData} />
              <ResultCard text={"TRAITS INFO"} />
              <PersonalityTraitsGrid />
            </div>
          </>
      }
    </>

  )
}

export default Questions