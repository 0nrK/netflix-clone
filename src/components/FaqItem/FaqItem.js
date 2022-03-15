import React, { useState } from 'react'

export const FaqItem = ({ props }) => {

    const [isAnswerActive, setIsAnswerActive] = useState(false)

    return (
        <div>
            <div className="question" onClick={() => setIsAnswerActive(!isAnswerActive)}>
                <span>{props.question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={isAnswerActive ? "icon active" : "icon"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <span className={isAnswerActive ? "answer active" : "answer"}>
                {props.answer}
            </span>
        </div>
    )
}
