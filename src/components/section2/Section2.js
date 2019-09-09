import React from "react";
import logo from './docplan-logo.png'

const Section2 = (props) => {
  return (
    <section class="section-intro">
      <div class="sub-intro">
        <h1>
          The world's
          <br />
          biggest healthcare platform
        </h1>
        <p>
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
        <img src={logo} alt="" />
      </div>
      <div class="sub-cards">
        {props.features.map(e => (
          <div class="cards">
            <img src={e.image} alt="flag" />
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
