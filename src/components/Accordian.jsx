import React, { useState } from "react";
import { Accordian_Data } from "../utils/static";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [openAccordian, setOpenAccordian] = useState(Accordian_Data[0].id);
  return (
    <div>
      {Accordian_Data.map((elem) => {
        return (
          <AccordianItem
            key={elem.id}
            title={elem.title}
            body={elem.body}
            isOpen={openAccordian === elem.id}
            setIsOpen={() =>
              openAccordian === elem.id
                ? setOpenAccordian(null)
                : setOpenAccordian(elem.id)
            }
          />
        );
      })}
    </div>
  );
};

export default Accordian;
