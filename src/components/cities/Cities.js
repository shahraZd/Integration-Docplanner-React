import React from "react";
import Card from "./Card"

const Section3 = (props) => {
  return (
    <section className="section-location">
      <div className="sub-loc">
        <h3>
          Improve the lives of millions.
          <br />
          Change yours forever
        </h3>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,
          Mexico City, Colombia and Curitiba, our search for great talent never
          stops.
        </p>
      </div>
      <div className="img-loc">
          {props.cities.map(e => (
        <Card image={e.image} title={e.title} button="See oppening" />
          ))}
        </div>
    </section>
  );
};

export default Section3;
