import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";

let features = [

  {
    title: "Share Resources",
    points :[
        "Cost savings: By pooling resources, people can access things they might not be able to afford on their own, or share the cost of a larger item to make it more affordable for everyone.",
        "Increased efficiency: Multiple people can use the same resources instead of each having to invest in their own.",
        "Collaborative opportunities: It can create opportunities for collaboration and networking. People can work together to achieve common goals or projects, and build relationships that can lead to future partnerships or collaborations.",
        "Social benefits: Sharing resources can also have social benefits, as it can bring people together and promote a sense of community.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/share_resource_lu721s.jpg",
  },
  {
    title: "Doubts Resolution",
    points :[
        // "Ask your doubts and get them answered by the community.",
        "Increased clarity: When your doubts are resolved, you gain a clearer understanding of the concept. This clarity can help you make better decisions and take more informed actions.",
        "Reduced anxiety: Uncertainty and doubt can create anxiety and stress. When your doubts are resolved, you can feel a sense of relief and reduce your anxiety levels.",
        "Improved learning: Doubts and questions can indicate areas where you need more information or clarification. By getting your doubts resolved, you can deepen your understanding and improve your learning.",
        "Increased confidence: When you have doubts, it can undermine your confidence in yourself and your abilities. By resolving your doubts, you can increase your confidence and feel more capable and empowered.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/doubt_hfsnon.jpg",
  },
  {
    title: "Make Relevant Connection",
    points :[
        "Get connected with like minded people.",
        "Professional networking: This will help you learn about job opportunities, get introduced to key contacts in your industry, and expand your knowledge and skills..",
        "Improved communication skills: This helps you in improving your communication skills, including your ability to listen, ask questions, and communicate your ideas effectively.",
        "Increased self-confidence: When you make connections and build relationships, you are building your own support system. This can help you feel more confident and empowered, knowing that you have people you can turn to for support and advice.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/connection_z8bopl.jpg",
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
