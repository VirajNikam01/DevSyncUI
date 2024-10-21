import React from "react";
import { useNavigate } from "react-router-dom";

const QuizResult = ({ correctAnswers, clearQuizAppState, totalQuestions }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center my-10 flex-col gap-5">
      <h1 className="text-2xl sm:text-3xl font-medium">
        Result<span>.</span>
      </h1>
      <p>
        You have scored,{" "}
        <span className="font-bold text-xl">{correctAnswers.filter((elem) => elem.isCorrect).length} /{" "}
        {totalQuestions}</span>
      </p>

      {/* Questions */}
      <div className="answers">
        {correctAnswers.map((elem)=>{
         return <div key={elem.question} className={`div my-2 border-t border-white/40 `}>
            <h1 className={`div my-2 ${elem.isCorrect ? 'text-green-600' : 'text-red-600'}`}><span>Question: </span>{elem.question}</h1>
            <h1 className="text-sm"><span>Answer: </span>{elem.answer}</h1>

          </div>
        })}
      </div>

      {/* Buttons */}
      <div className="buttons  flex gap-3 my-5">
        <button
          onClick={() => {
            clearQuizAppState();
            navigate("/quiz");
          }}
          className="px-4 py-2 bg-cyan-700"
        >
          Start Again
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="px-4 py-2 bg-white/30"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
