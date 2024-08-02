// 1.
// document.getElementById("hideButton").addEventListener("click", () => {
//   document.getElementById("uniqueDiv").style.display = "none";
// });

// 2.

// let cardDiv = document.createElement("div");
// cardDiv.id = "card";

// let h2Element = document.createElement("h2");
// h2Element.textContent = "Gandalf";

// let anchorElement = document.createElement("a");
// anchorElement.href = "#";
// anchorElement.textContent = "Go to profile";

// cardDiv.appendChild(h2Element);
// cardDiv.appendChild(anchorElement);

// const container = document.getElementById("container");
// container.appendChild(cardDiv);

// 3.
// const questions = [
//   {
//     question: "what is the capital of france?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correct: 0,
//   },
//   {
//     question: "what is 2 + 2?",
//     answers: ["3", "4", "5", "6"],
//     correct: 1,
//   },
//   {
//     question: "who wrote Harry Poter?",
//     answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
//     correct: 2,
//   },
// ];

// let score = 0;

// const quizContainer = document.getElementById("quiz-container");
// const scoreDisplay = document.getElementById("score");

// questions.forEach((q, index) => {
//   const questionDiv = document.createElement("div");
//   questionDiv.setAttribute("style", "margin-bottom: 20px;");

//   const questionTitle = document.createElement("h3");
//   questionTitle.textContent = q.question;
//   questionDiv.appendChild(questionTitle);

//   const answersDiv = document.createElement("div");

//   q.answers.forEach((answer, i) => {
//     const answerButton = document.createElement("button");
//     answerButton.textContent = answer;
//     answerButton.setAttribute(
//       "style",
//       "display: block; margin-bottom: 5px; padding: 10px; border: 1px solid #ccc; cursor: pointer;"
//     );

//     answerButton.addEventListener("click", () => {
//       if (i === q.correct) {
//         answerButton.setAttribute(
//           "style",
//           "background-color: #4CAF50; color: white; display: block; margin-bottom: 5px; padding: 10px; border: 1px solid #ccc; cursor: pointer;"
//         );
//         score++;
//         scoreDisplay.textContent = score;
//       } else {
//         answerButton.setAttribute(
//           "style",
//           "background-color: #f44336; color: white; display: block; margin-bottom: 5px; padding: 10px; border: 1px solid #ccc; cursor: pointer;"
//         );
//       }

//       const buttons = answersDiv.querySelectorAll("button");
//       buttons.forEach((button) => (button.disabled = true));

//       buttons[q.correct].setAttribute(
//         "style",
//         "background-color: #4CAF50; color: white; display: block; margin-bottom: 5px; padding: 10px; border: 1px solid #ccc; cursor: pointer;"
//       );
//     });

//     answersDiv.appendChild(answerButton);
//   });

//   questionDiv.appendChild(answersDiv);
//   quizContainer.appendChild(questionDiv);
// });
