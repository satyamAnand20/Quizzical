import quiz1 from "../assets/quiz1.jpg";
import quiz2 from "../assets/quiz2.jpg";
import quiz3 from "../assets/quiz3.jpg";
import quiz4 from "../assets/quiz4.jpg";
import quiz5 from "../assets/quiz5.jpg";
import quiz6 from "../assets/quiz6.jpg";
import quiz7 from "../assets/quiz7.jpg";

export const quizzes = [
  {
    id: 1,
    title: "Dr. Doe's Chemistry Quiz",
    plays: 5,
    image: quiz1,
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        correctOptionIndex: 1,
      },
      {
        id: 2,
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        correctOptionIndex: 2,
      },
      {
        id: 3,
        question: "What is the pH value of pure water?",
        options: ["7", "5", "10", "0"],
        correctOptionIndex: 0,
      },
      {
        id: 4,
        question: "Which element is used in thermometers?",
        options: ["Lead", "Mercury", "Copper", "Zinc"],
        correctOptionIndex: 1,
      },
      {
        id: 5,
        question: "Which of the following is not an acid?",
        options: ["HCl", "H2SO4", "NaOH", "CH3COOH"],
        correctOptionIndex: 2,
      },
      {
        id: 6,
        question: "Which gas is responsible for the fizz in soft drinks?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        correctOptionIndex: 1,
      },
      {
        id: 7,
        question: "Which part of the atom has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        correctOptionIndex: 2,
      },
      {
        id: 8,
        question: "Which substance turns blue litmus red?",
        options: ["Base", "Salt", "Acid", "Water"],
        correctOptionIndex: 2,
      },
      {
        id: 9,
        question: "What is the atomic number of Hydrogen?",
        options: ["0", "1", "2", "8"],
        correctOptionIndex: 1,
      },
      {
        id: 10,
        question: "Which of the following is a noble gas?",
        options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
        correctOptionIndex: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Which Country Matches You ?",
    plays: 145,
    image: quiz2,
  },
  {
    id: 3,
    title: "Aptitude Calendar Quiz",
    plays: 3,
    image: quiz3,
  },
  {
    id: 4,
    title: "Mexico Country Quiz",
    plays: 3,
    image: quiz4,
  },
  {
    id: 5,
    title: "AI in Daily Life Quiz",
    plays: 3,
    image: quiz5,
  },
  {
    id: 6,
    title: "Guess the Actor!",
    plays: 7,
    image: quiz6,
  },
  {
    id: 7,
    title: "Guess Country by National Sport",
    plays: 6,
    image: quiz7,
  },
];
