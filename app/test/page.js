"use client"
import React from "react";
import Questions from "@/components/Questions";


const page = () => {
  return (
    <div className=" bg-slate-400">
      <div className="grid place-items-center">
        <Questions />
      </div>
    </div>
  );
};

export default page;
