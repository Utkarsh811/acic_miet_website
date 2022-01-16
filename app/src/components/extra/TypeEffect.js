import React, { useState, useEffect } from "react";
import "./extra.css";

const words = ["ACIC Meerut", "Welcome", "About Us"];

const TypeEffects = (props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 100)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div style={{ height: "3rem" }}>
      <h1 className="Welcome">{`${words[index].substring(0, subIndex)}`}</h1>
    </div>
  );
};

export default TypeEffects;
