import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, SetList] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      SetList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>code generator</h3>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={`${error ? "error" : null}`}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            {" "}
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
