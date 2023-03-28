import React from "react";
import doubts from '../../images/doubts.png'
import './FeatureCard.css'

const FeatureCard = () => {
    return (
        <div className="feature__card">
            <img src={doubts} alt="doubt_img" className="feature__card__doubt"/>
            <h2 className="feature__card__head">Get Your Doubts Solved</h2>
            <p className="feature__card__para">Lorem ipsum dolor sit amet consectetur. Eu et in faucibus elit vulputate aliquam ut. Dui turpis est pellentesque aliquet porta. Ultrices hendrerit orci etiam mauris duis pharetra et sit pellentesque. Praesent id nec eget urna vestibulum. Dui turpis est pellentesque aliquet.</p>
        </div>
    )
}

export default FeatureCard;