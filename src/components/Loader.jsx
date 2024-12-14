import React from "react";
import Spinner from "/spinner.svg";

const Loader = ({className='w-24 h-24'}) => {
  return <img className={className} src={Spinner} alt="" />;
};

export default Loader;
