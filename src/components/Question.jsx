import React from "react";

const Question = ({ question, options, selectedOption, handelOptionClick }) => {
  return (
    <div className="container flex items-center justify-center py-10 ">
      <div className="">
        <h1 className="question text-lg text-left font-medium cursor-default ">{question}</h1>
        <ul className="text-left">
          {options.map((elem, index) => {
            return (
              <li
                onClick={() => handelOptionClick(elem.answer, elem.isCorrect)}
                className={`my-2 text-sm sm:text-base cursor-pointer  p-1 ${
                  selectedOption === elem.answer ? "bg-orange-600" : "hover:bg-white/10"
                }`}
                key={elem.answer}
              >
                {" "}
                <span>{index + 1}. </span> {elem.answer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Question;
