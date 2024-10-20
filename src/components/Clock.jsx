import React, { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState({ hour: "00", min: "00", sec: "00" });

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const hour =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      const min =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      const sec =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();

      setTime({ hour, min, sec });
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, [time]);

  return (
    <div>
      <div className="grid grid-cols-3 font-medium select-none">
        <h1>{time.hour} : </h1>
        <h1>{time.min} : </h1>
        <h1>{time.sec}</h1>
      </div>
    </div>
  );
};

export default Clock;
