const questionArray = [
    {
        question: "This dish is a speciality in the region of Gunma, typically consisting of pork tenderloin which is breaded and deep fried.",
        correctAnswer: "Tonkatsu",
        allAnswers : [
                             "Menchikatsu",
                             "Katsudon",
                             "Tonkatsu",
                            ]
    },

    {
        question: "A type of sushi consisting of pressed rice, usually topped with fish.",
        correctAnswer: "Nigiri",
        allAnswers : [
                            "Sashimi",
                             "Maki",
                             "Nigiri"
                            ]
    },

    {
        question: "These boiled dumplings are usually filled with ground meat and vegetables, served in a very light broth.",
        correctAnswer: "Sui gyoza",
        allAnswers : [
                            "Yaki gyoza",
                             "Age gyoza",
                             "Sui gyoza"
                            ]
    },

    {
        question: "Katsuobushi shavings (or bonito flakes) are derived from which fish?",
        correctAnswer: "Tuna",
        allAnswers : [
                            "Salmon",
                             "Mackerel",
                             "Tuna"
                            ]
    },

    {
        question: "What is Japanese horseradish otherwise known as? ",
        correctAnswer: "Wasabi",
        allAnswers : [
                            "Onigiri",
                            "Karaage",
                            "Wasabi",
                            ]
    },

    {
        question: "Found all over Japan in street food markets and sushi restaurants, this fried rolled omelette is typically seasoned with salt and dashi.",
        correctAnswer: "Tamagoyaki",
        allAnswers : [
                            "Datemaki",
                            "Okonomiyaki",
                            "Tamagoyaki",
                            ]
    },

    {
        question: "Which of these Japanese islands is famous for it’s Tarabagani (King Crab)?",
        correctAnswer: "Hokkaido",
        allAnswers : [
                            "Tashiro",
                            "Sado",
                            "Hokkaido",
                            ]
    },

    {
        question: "Which Japanese fruit is said to be one of the most expensive in the world?",
        correctAnswer: "Yubari melon",
        allAnswers : [
                            "Momo peach",
                            "Akebi",
                            "Yubari melon",
                            ]
    },

    {
        question: "Which variety of beef is identified by it’s fatty, well-marbled texture? ",
        correctAnswer: "Kobe",
        allAnswers : [
                            "Yonezawa",
                            "Mishima",
                            "Kobe",
                            ]
    },

    {
        question: "What fish-shaped pancake is traditionally filled with sweetened adzuki beans?",
        correctAnswer: "Taiyaki",
        allAnswers : [
                            "Zabuton Dora",
                            "Mitarashi Dango",
                            "Taiyaki"
                            ]
    }
] 

const questionText = document.getElementById("question");
const answerSection = document.getElementById("answers");
let questionNumber;


function getQuestionNumber() {
  questionNumber = Math.floor(Math.random() * questionArray.length);
}

getQuestionNumber();

questionText.textContent = questionArray[questionNumber].question;

for (let i = 0; i < answerSection.children.length - 1; i++) {
  answerSection.children[i].textContent = questionArray[questionNumber].allAnswers[i];
}