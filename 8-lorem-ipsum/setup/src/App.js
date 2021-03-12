import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSub = (e) => {
    e.preventDefault();
    const amount = parseInt(count);

    if (amount <= 0) {
      setText(data.slice(0, 1));
    }
    if (amount > 8) {
      setText(data.slice(0, 8));
    } else {
      setText(data.slice(0, amount));
    }
  };

  return (
    <section className="section-center">
      <h2>Generate random Paragraphs </h2>
      <form className="lorem-from" onSubmit={handleSub}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn"> generate </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
