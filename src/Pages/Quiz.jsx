import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const techButtons = ["javascript", "react", "html"];
const Quiz = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    setSelectedTech(lang);
  };

  const playSelectedQuiz = () => {
    navigate(selectedTech);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <h1 className=" text-2xl sm:text-3xl font-bold px-2">Let's Quiz, </h1>

      <div className="container flex flex-col w-full items-center justify-center my-10">
        <h1 className="text-xl">Choose Technology,</h1>
        <div className="buttons mt-5 mb-2 flex gap-5">
          {techButtons.map((text) => {
            return (
              <button
                key={text}
                onClick={() => handleLanguageSelect(text)}
                className={`border px-5 py-1 rounded-md ${
                  selectedTech === text &&
                  " border-teal-700 shadow-2xl shadow-emerald-700 "
                }`}
              >
                {text.toUpperCase()}
              </button>
            );
          })}
        </div>

        {!selectedTech && (
          <p className=" text-sm text-teal-300">
            select technology to start quiz
          </p>
        )}

        <div className="description text-center px-2 my-3 text-sm text-white/70 md:w-1/2">
          <p>
            Welcome to the Quiz Challenge! Test your knowledge across multiple
            sections, each with 3 exciting questions. You’ll have 30 seconds to
            answer each question, so think fast and aim for the top score. Ready
            to begin? Let’s get started!
          </p>
        </div>
        <button
          onClick={playSelectedQuiz}
          disabled={!selectedTech}
          className={`px-10 py-2 my-5 rounded-md bg-teal-800 disabled:bg-gray-600 disabled:cursor-not-allowed`}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
