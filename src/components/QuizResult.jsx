import React from "react";
import { useNavigate } from "react-router-dom";

const QuizResult = ({ correctAnswers, clearQuizAppState, totalQuestions}) => {
    const navigate = useNavigate()
  return <div className="flex items-center justify-center my-10 flex-col gap-5">
    <h1 className="text-2xl sm:text-3xl font-medium">Result<span>.</span></h1>
    <p>You have scored, {correctAnswers.filter((elem)=>elem).length} outof {totalQuestions}</p>
    <button
    onClick={()=>{
        clearQuizAppState()
        navigate('/quiz')
    }}
    className="px-4 py-2 bg-sky-700">Start Again</button>
  </div>;
};

export default QuizResult;
