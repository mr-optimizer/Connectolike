import React from "react";
import FeatureCard from "./FeatureCard";
import DoubtImg from "../../images/Landing/doubt.jpg";
import ConnectionImg from "../../images/Landing/connection.jpg";
import ShareResourcesImg from "../../images/Landing/share_resource.jpg";

import "./Features.css";

let features = [

  {
    title: "Share Resources",
    points :[
        "Share resources that you find useful and help others.",
        "Share resources that you find useful and help others.",
        "Share resources that you find useful and help others.",
        "Share resources that you find useful and help others.",
    ],
    image: ShareResourcesImg,
  },
  {
    title: "Ask your Doubts",
    points :[
        "Ask your doubts and get them answered by the community.",
        "Get your doubts answered by the community.",
        "Get your doubts answered by the community.",
        "Get your doubts answered by the community.",
    ],
    image: DoubtImg,
  },
  {
    title: "Share Code Snippets",
    points :[
        "Share code snippets that you find useful and help others.",
        "Share code snippets that you find useful and help others.",
        "Share code snippets that you find useful and help others.",
        "Share code snippets that you find useful and help others.",
    ],
    image: ConnectionImg,
  },

];

const Features = () => {
  return (
    <>
      <h1 className="section__head">Features</h1>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.points}
            image={feature.image}
            isRotated={index % 2 === 0 ? false : true}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
