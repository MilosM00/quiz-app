import React from "react";
import Quiz from "./components/Quiz";

const App = () =>{

    const quiz = [
        {
            question: "What is Earth's largest continent?",
            options: [
                {answer: "Europe", isCorrect: false},
                {answer: "Africa", isCorrect: false},
                {answer: "Asia", isCorrect: true},
                {answer: "Antarctica", isCorrect: false}
            ]
        },

        {
            question: "What is the tallest mountain in the world?",
            options: [
                {answer: "Mount Kilamanjaro", isCorrect: false},
                {answer: "Mount Everest", isCorrect: true},
                {answer: "Aconcagua", isCorrect: false},
                {answer: "Qogir", isCorrect: false}
            ]
        },

        {
            question: "What is the flattest continent?",
            options: [
                {answer: "South America", isCorrect: false},
                {answer: "Antarctica", isCorrect: false},
                {answer: "Africa", isCorrect: false},
                {answer: "Australia", isCorrect: true}
            ]
        },

        {
            question: "What city is the capital of Australia?",
            options: [
                {answer: "Canberra", isCorrect: true},
                {answer: "Perth", isCorrect: false},
                {answer: "Melbourne", isCorrect: false},
                {answer: "Sydney", isCorrect: false}
            ]
        },

        {
            question: "What is the highest waterfall in Europe?",
            options: [
                {answer: "Kjelfossen", isCorrect: false},
                {answer: "Krimml", isCorrect: true},
                {answer: "Rhine", isCorrect: false},
                {answer: "Triberg", isCorrect: false}
            ]
        },

        {
            question: "Montevideo is the capital of what South American country?",
            options: [
                {answer: "Peru", isCorrect: false},
                {answer: "Paraguay", isCorrect: false},
                {answer: "Suriname", isCorrect: false},
                {answer: "Uruguay", isCorrect: true}
            ]
        },

        {
            question: "What continent contains the most fresh water?",
            options: [
                {answer: "Anrarctica", isCorrect: true},
                {answer: "Asia", isCorrect: false},
                {answer: "North America", isCorrect: false},
                {answer: "Africa", isCorrect: false}
            ]
        },

        {
            question: "What is the only major city located on two continents?",
            options: [
                {answer: "Rome", isCorrect: false},
                {answer: "New Delhi", isCorrect: false},
                {answer: "London", isCorrect: false},
                {answer: "Instanbul", isCorrect: true}

            ]
        },

        {
            question: "What is the largest country in the world in terms of land area?",
            options: [
                {answer: "Canada", isCorrect: false},
                {answer: "Russia", isCorrect: true},
                {answer: "United States", isCorrect: false},
                {answer: "China", isCorrect: false}
            ]
        },

        {
            question: "What country has the most natural lakes?",
            options: [
                {answer: "Australia", isCorrect: false},
                {answer: "India", isCorrect: false},
                {answer: "Canada", isCorrect: true},
                {answer: "Unated States", isCorrect: false}
            ]
        }
    ];

    return(

        <div className="app-overlay">

            <Quiz 
                quiz={quiz}
            />

        </div>

    );
};

export default App;