import React, { useState } from "react";
import "./Whycc.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Whycc = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="whycc">
      <h1 className="section__head">Why Code Companion</h1>
      <div className="whycc__figures">
        <div className="whycc__figures-fig">
          <sapn className="cont">
            <span class="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={120} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </sapn>
          <span className="fig-title">Doubts Solved</span>
        </div>
        <div className="whycc__figures-fig">
          <span className="cont">
            <span class="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={160} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </span>
          <span className="fig-title">Active Users</span>
        </div>
        <div className="whycc__figures-fig">
          <span className="cont">
            <span class="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={240} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </span>
          <span className="fig-title">Community</span>
        </div>
      </div>
      <div className="whycc__para">
        Lorem ipsum dolor sit amet consectetur. Viverra arcu egestas sed in
        tellus consectetur viverra. Eget dignissim varius id sit netus nibh
        habitasse pellentesque. Elementum ut elementum lorem a imperdiet
        molestie gravida morbi vivamus. Pellentesque ligula porta blandit
        dignissim tempus nunc. Pharetra gravida tincidunt volutpat. imperdiet
        molestie gravida morbi.
      </div>
    </div>
  );
};

export default Whycc;
