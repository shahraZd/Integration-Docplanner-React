import React from "react";
import logo from '../assets/docplan-logo.png'

const Stats = (props) => {
  return (
    <section className="section-intro">
      <div className="sub-intro">
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
      <div className="sub-cards">
        {props.stats.map(e => (
          <div className="cards">
            <img src={e.image} alt="flag" />
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
