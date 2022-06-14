import { useState } from "react";

import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <h1>Count : {count}</h1>
      <button className="count-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="count-btn" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Count;
