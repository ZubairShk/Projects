import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [expand, setExpand] = useState(false);
  const fun = () => {
    setExpand(!expand);
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>

        <button className="btn" onClick={fun}>
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expand && <p>{info}</p>}
    </div>
  );
};

export default Question;
