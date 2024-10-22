import React, { useEffect, useState } from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((100 / (totalSteps - 1)) * currentStep);
  }, [currentStep]);

  return (
    <div className="w-full relative sm:my-3">
      <div className="progress-outer w-full h-1 sm:h-2 bg-white/30 relative">
        <div
          className="progress-inner bg-sky-700 duration-300 h-1 sm:h-2  "
          style={{ width: progress + "%" }}
        ></div>

        <div className="progress-steps w-full h-1 sm:h-2 flex justify-between items-center absolute top-0 left-0   ">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
            (elem, index) => {
              return (
                <div
                  key={elem}
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${
                    index === currentStep &&
                    "border-sky-700 border-2 sm:border-4"
                  }  ${
                    index < currentStep
                      ? "bg-sky-700 text-white border"
                      : "bg-white"
                  } text-black rounded-full flex items-center justify-center`}
                >
                  <h1 className="font-bold">{elem}</h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
