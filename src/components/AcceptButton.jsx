import React from "react";

const AcceptButton = ({ id, setRequestAccepted, RequestAccepted }) => {
  const handelAcceptButtonClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:7777/request/review/accepted/${id}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await response.json();
      setRequestAccepted("accepted");
      console.log(data, "DATA ACCEPED");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handelAcceptButtonClick}
      disabled={RequestAccepted==='accepted'}
      className={`w-full border px-4 py-1 rounded-xl disabled:bg-white/60 border-teal-700 duration-300 hover:bg-teal-700/50`}
    >
     {RequestAccepted==='accepted' ? 'connected' : '✔️'} 
    </button>
  );
};

export default AcceptButton;
