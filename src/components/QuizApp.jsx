import React, { useEffect, useState } from "react";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuizApp = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const submitQuestions = () => {
    setCorrectAnswers((prev) => [...prev, { ...selectedData }]);

    if (currentQuestion === data.length - 1) {
      setIsFormCompleted(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handelOptionClick = (answer, isCorrect, question) => {
    setSelectedOption(answer);

    setSelectedData({ question, isCorrect, answer });
  };

  const clearQuizAppState = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCorrectAnswers([]);
  };


  return (
    <div>
      {!isFormCompleted ? (
        <>
          <div className="containt text-center  ">
            <Question
              key={data[currentQuestion].question}
              question={data[currentQuestion].question}
              options={data[currentQuestion].options}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              handelOptionClick={handelOptionClick}
            />
          </div>
          <div className="btns text-right">
            <button
              disabled={!selectedOption}
              onClick={submitQuestions}
              className=" mx-6 disabled:bg-white/20 disabled:cursor-not-allowed"
            >
              {data.length - 1 === currentQuestion ? (
                <p
                  className={`px-10 bg-teal-700 py-2 ${
                    !selectedOption && "bg-white/20"
                  }`}
                >
                  Submit
                </p>
              ) : (
                <p className="px-10 border py-2">Next</p>
              )}
            </button>
          </div>
        </>
      ) : (
        <QuizResult
          totalQuestions={data.length}
          clearQuizAppState={clearQuizAppState}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
};

export default QuizApp;
