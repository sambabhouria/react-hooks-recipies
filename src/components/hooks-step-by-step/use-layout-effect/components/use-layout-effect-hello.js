import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./use-fetch";
import { useMeasure } from "./use-measure";

  const UseLayoutEffectHello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count")) ? JSON.parse(localStorage.getItem("count")): 1
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button className="button muted-button" onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};

export default UseLayoutEffectHello
