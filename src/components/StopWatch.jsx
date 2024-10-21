import React, { useEffect, useState } from "react";

const StopWatch = ({ second }) => {
  const [time, setTime] = useState(second || 30);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prev) => {
        const data = Number(prev) - 1;
        if (data === 0) clearInterval(timeInterval);

        if (data < 10) return "0" + data;
        return data;
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="min-w-10">
      <span className="py-1 block border w-full border-white/30 text-white/30">
        {time}
      </span>
    </div>
  );
};

export default StopWatch;
