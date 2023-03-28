import React from "react";
import './Hero.css';
import { useTypewriter } from "react-simple-typewriter";
// import ScrollTrigger from "react-scroll-trigger";
// import { Navigate, useNavigate } from "react-router-dom";

const Hero = () => {
    // const navigate = useNavigate();
    const clickHandler = () =>{
        
    }
    const [text] = useTypewriter({
        words: ['Pahla word','Dusra word','Teesra word'],
        loop: 0
    })

    // const textDisplay = document.querySelector(".hero__texts__head__subhead");
    // const messageArray = ["Typeing effffect", "Second Word", "Third Word"];
    // let i = 0;
    // let j = 0;
    // let currentMessage = [];
    // let isDeleting = false;
    // let isEnd = false;

    // function loop() {
    //     // isEnd = false;
    //     textDisplay.innerHTML = currentMessage.join('')

    //     if(i<messageArray.length){
    //         if(!isDeleting && j< messageArray[i].length){
    //             currentMessage.push(messageArray[i][j])
    //             j++;
    //         }

    //         if(isDeleting && j<=messageArray[i].length){
    //             currentMessage.pop(messageArray[i][j])
    //             j--;
    //         }

    //         if(j === messageArray[i].length){
    //             isEnd = true;
    //             isDeleting = true;
    //         }

    //         if(isDeleting && j===0){
    //             currentMessage = []
    //             isDeleting = false; 
    //             i++;

    //             if(i===messageArray.length){
    //                 i=0;
    //             }
    //         }
    //     }
    //     // const speedUp = Math.random() * (80-50) + 50;
    //     // const normalSpeed = Math.random * (300-200) + 200;
    //     // const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    //     setTimeout(loop,500);
    // }

    return (
        <div className="hero">
            <div className="hero__texts">
                <div className="hero__texts__head">Lorem Ipsum Erum Mat</div>
                <div className="hero__texts__head__subhead">{text}</div>
                {/* <Typewriter className="hero__texts__head__subhead"
                    options={{
                        strings: ['Hello World', 'World Hello'],
                        autoStart: true,
                        loop: true,
                    }}
                /> */}
                <button className="hero__texts__btn" onClick={clickHandler} >Put yourself in a better Environment</button>
            </div>
            <div className="hero__images"></div>
        </div>
    )
}

export default Hero;