import React from "react";

const Quiz = (props) =>{
    
    const [playing, setPlaying] = React.useState(true);
    
    const [number, setNumber] = React.useState(0);
    
    const [score, setScore] = React.useState(0);

    const changeNumber = (isCorrect) =>{

        if(isCorrect === true){
            setScore(prevScore => prevScore + 1);
        }

        if(number === 9){
            setPlaying(false);
        }

        setNumber(prevNumber => prevNumber + 1);
        
    };

    const playAgain = () =>{
        setPlaying(true);
        setNumber(0);
        setScore(0);
    };

    return(

        <div className="quiz-overlay">
        {playing === true ?  
        <>

            <p className="question-number">Question {number + 1}/10</p>
            
            <p className="question-text">{props.quiz[number].question}</p>
            
            <div className="inline">

                <p className="answer" onClick={() => changeNumber(props.quiz[number].options[0].isCorrect)}>A: <span>{props.quiz[number].options[0].answer}</span></p>
                <p className="answer" onClick={() => changeNumber(props.quiz[number].options[1].isCorrect)}>B: <span>{props.quiz[number].options[1].answer}</span></p>

            </div>
            
            <div className="inline">

                <p className="answer" onClick={() => changeNumber(props.quiz[number].options[2].isCorrect)}>C: <span>{props.quiz[number].options[2].answer}</span></p>
                <p className="answer" onClick={() => changeNumber(props.quiz[number].options[3].isCorrect)}>D: <span>{props.quiz[number].options[3].answer}</span></p>

            </div>

        </> : 
        
        <>
        
            <div className="score">

                <p className="score-info">You score is {score}/10</p>
                <button className="button-play-again" onClick={playAgain}>Play Again</button>

            </div>

        </>
        
        }

        </div>

    );
};

export default Quiz;