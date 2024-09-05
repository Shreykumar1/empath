"use client"
import React from 'react'
import ResultCard from '@/components/ResultCard';
import PersonalityCard from '@/components/PersonalityCard';
import PersonalityTraitsGrid from '@/components/PersonalityTraitsGrid';
import personalityDetails from '../personality';
const page = () => {
  const personalityData = personalityDetails.find(obj => obj.type === "ESTJ");
  return (
    <>
        <div className='flex justify-center'>
            <div className='max-w-6xl w-3/4 '>
                <a href='/test' className='btn btn-neutral '>Back</a>
                <ResultCard text={"SAMPLE RESULT"}/>
                <PersonalityCard personality={personalityData} />
                <ResultCard text={"TRAITS INFO"}/>
                <PersonalityTraitsGrid />
            </div>
        </div>

    </>
  )
}

export default page