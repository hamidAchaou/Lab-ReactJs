import React, { useRef, useState } from "react";
import Card from "./Card";
import "./ref.css";

const Ref = () => {
  const lastParagraph = useRef();
  const firstParagraph = useRef();

  // const count = useRef(0); // nutable
  // const [count] = useState(0); // imutable

  const goToTop = () => {
    firstParagraph.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToBottom = () => {
    lastParagraph.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="mainContainer">
      <div className="btnScroll">
        <button className="btnGo" onClick={goToBottom}>
          Go to Bottom
        </button>
      </div>
      <Card url={"https://picsum.photos/id/100/200/300"} ref={firstParagraph} />
      <Card url={"https://picsum.photos/id/101/200/300"} />
      <Card url={"https://picsum.photos/id/102/200/300"} />
      <Card url={"https://picsum.photos/id/103/200/300"} />
      <Card url={"https://picsum.photos/id/104/200/300"} />
      <Card url={"https://picsum.photos/id/200/200/300"} ref={lastParagraph} />
      <button className="btnGo" onClick={goToTop}>
        Go to Top
      </button>
    </main>
  );
};

export default Ref;
