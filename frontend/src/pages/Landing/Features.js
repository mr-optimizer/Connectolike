import React from "react";
import FeatureCard from "./FeatureCard";

import './Features.css'


const Features = () => {
    return (
        <div className="features">
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
    )
}

export default Features;