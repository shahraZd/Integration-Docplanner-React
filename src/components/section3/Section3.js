import React from "react";

const Section3 = (props) => {
  return (
    <section class="section-location">
      <div class="sub-loc">
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
      <div class="img-loc">
          {props.cards.map(e => (
            <div class="img-card ">
              <img src={e.image} alt="city" />
              <div class="desc">
                <p>{e.title}</p>
                <button class="btn">See openings</button>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Section3;
