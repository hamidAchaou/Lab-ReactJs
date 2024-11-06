import React from "react";
import "./ref.css";

const Card = React.forwardRef((props, ref) => {
  return (
    <section className="sectionRef" ref={ref}>
      <img src={props.url} alt="Image Ipsum" className="cardImage" />
      <p className="cardText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
        pariatur ex eveniet. Sint labore error velit exercitationem quidem.
        Omnis similique accusamus molestiae, iure nobis tenetur. Earum et sunt
        consequatur!
      </p>
    </section>
  );
});

export default Card;
