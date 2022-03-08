import React, { useState } from 'react'

const Question = () => {
    const [isQueActive, setIsQueActive] = useState(false)

    return (
        <div>
            <div className="question" onClick={() => setIsQueActive(!isQueActive)}>
                <span>What is Netflix?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={isQueActive ? "icon active" : "icon"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <span className={isQueActive ? "answer active" : "answer"}>
                Aliquip consectetur magna cupidatat aute. Fugiat esse labore qui dolore magna esse qui est et esse veniam. Eu id enim aute voluptate magna est amet nulla est ipsum ullamco ut incididunt. Nisi dolore ullamco amet anim sit. Cillum aute sunt adipisicing ex occaecat deserunt eiusmod culpa amet.
            </span>
        </div>
    )
}

export default Question