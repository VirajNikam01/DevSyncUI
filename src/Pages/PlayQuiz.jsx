import React from "react";
import { useParams } from "react-router-dom";
import { Quiz_Data } from "../utils/static";
import QuizApp from "../components/QuizApp";

const PlayQuiz = () => {
  const { tech } = useParams();

  scrollTo(0, 0);
  return (
    <div className=" px-2 sm:px-0 sm:max-w-screen-xl mx-auto my-5">
      <div className="nav">
        <h1 className="text-2xl font-bold select-none">{tech.toUpperCase()}</h1>
      </div>
      <QuizApp data={Quiz_Data[tech]} />
    </div>
  );
};

export default PlayQuiz;
