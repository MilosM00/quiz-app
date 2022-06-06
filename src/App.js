import React from "react";
import Quiz from "./components/Quiz";

const App = () =>{

    const quiz = [
        {
            question: "What is Earth's largest continent?",
            options: [
                {answer: "Asia", isCorrect: true},
                {answer: "Europe", isCorrect: false},
                {answer: "Africa", isCorrect: false},
                {answer: "Antarctica", isCorrect: false}
            ]
        },

        {
            question: "What is the tallest mountain in the world?",
            options: [
                {answer: "Mount Everest", isCorrect: true},
                {answer: "Mount Kilamanjaro", isCorrect: false},
                {answer: "Aconcagua", isCorrect: false},
                {answer: "Qogir", isCorrect: false}
            ]
        },

        {
            question: "What is the flattest continent?",
            options: [
                {answer: "Australia", isCorrect: true},
                {answer: "South America", isCorrect: false},
                {answer: "Antarctica", isCorrect: false},
                {answer: "Africa", isCorrect: false}
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
                {answer: "Krimml", isCorrect: true},
                {answer: "Rhine", isCorrect: false},
                {answer: "Kjelfossen", isCorrect: false},
                {answer: "Triberg", isCorrect: false}
            ]
        },

        {
            question: "Montevideo is the capital of what South American country?",
            options: [
                {answer: "Uruguay", isCorrect: true},
                {answer: "Peru", isCorrect: false},
                {answer: "Paraguay", isCorrect: false},
                {answer: "Suriname", isCorrect: false}
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
                {answer: "Instanbul", isCorrect: true},
                {answer: "Rome", isCorrect: false},
                {answer: "New Delhi", isCorrect: false},
                {answer: "London", isCorrect: false}
            ]
        },

        {
            question: "What is the largest country in the world in terms of land area?",
            options: [
                {answer: "Russia", isCorrect: true},
                {answer: "Canada", isCorrect: false},
                {answer: "United States", isCorrect: false},
                {answer: "China", isCorrect: false}
            ]
        },

        {
            question: "What country has the most natural lakes?",
            options: [
                {answer: "Canada", isCorrect: true},
                {answer: "Australia", isCorrect: false},
                {answer: "India", isCorrect: false},
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