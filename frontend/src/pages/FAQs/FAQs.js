import React, { useState } from 'react'
import './FAQs.css'

const FAQs = () => {
    const qnaList = [
        {
            id: 1,
            question: "Question 1",
            answer: "Answer 1",
        },
        {
            id: 2,
            question: "Question 2",
            answer: "Answer 2",
        },
        {
            id: 3,
            question: "Question 3",
            answer: "Answer 3",
        },
        {
            id: 4,
            question: "Question 4",
            answer: "Answer 4",
        },
        {
            id: 5,
            question: "Question 5",
            answer: "Answer 5",
        },
        {
            id: 6,
            question: "Question 6",
            answer: "Answer 6",
        },
    ]

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            setSelected(null)
        }
        setSelected(i);
    }
  return (
    <div className='faqs'>
        <h1 className='faqs'>Frequently Asked Questions</h1>
        <div className='question-container'>
            {
                qnaList.map((item,i) => (
                    <div className='item'>
                        <div className='title' onClick={()=>{toggle(i)}}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+' }</span>
                        </div>
                        <div className={selected === i ? 'content.shown' : 'content'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQs


// accordion