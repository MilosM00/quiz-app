import React from "react";

const Quiz = (props) =>{

    console.log(props.quiz)

    return(

        <div className="quiz-overlay">

            <p className="question-number">Question 1/10</p>

            <p className="question-text">{props.quiz[0].question}</p>

            <div className="inline">
                <p className="answer">A: <span>{props.quiz[0].options[0].answer}</span></p>
                <p className="answer">B: <span>{props.quiz[0].options[1].answer}</span></p>
            </div>

            <div className="inline">
                <p className="answer">C: <span>{props.quiz[0].options[2].answer}</span></p>
                <p className="answer">D: <span>{props.quiz[0].options[3].answer}</span></p>
            </div>

        </div>

    );
};

export default Quiz;