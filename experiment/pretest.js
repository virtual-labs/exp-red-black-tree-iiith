 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. What is an AVL tree?", ///// Write the question inside double quotes
            answers: {
                a: "A tree which is unbalanced and is a height balanced tree. ", ///// Write the option 1 inside double quotes
                b: "A tree with three children.", ///// Write the option 2 inside double quotes
                c: "A tree with atmost 3 children.", ///// Write the option 2 inside double quotes
                d: " A tree which is balanced and is a height balanced tree.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the maximum difference in heights between the leafs of a AVL tree is possible?",  ///// Write the question inside double quotes
      answers: {
        a: "log(n) where n is the number of nodes ",                  ///// Write the option 1 inside double quotes
        b: " atmost 1 ",                  ///// Write the option 2 inside double quotes
	c: "0 or 1 ", ///// Write the option 3 inside double quotes
        d: "n where n is the number of nodes", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is the maximum height of an AVL tree with p nodes?",  ///// Write the question inside double quotes
      answers: {
        a: "p",                  ///// Write the option 1 inside double quotes
        b: "log(p)",                  ///// Write the option 2 inside double quotes
	c: " p/2", ///// Write the option 3 inside double quotes
        d: " log(p)/2 ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "4. Why do we need a binary tree which is height balanced?",  ///// Write the question inside double quotes
      answers: {
        a: "To avoid formation of skew trees",                  ///// Write the option 1 inside double quotes
        b: "To save memory",                  ///// Write the option 2 inside double quotes
	c: "To simplify storing ", ///// Write the option 3 inside double quotes
        d: "To attain faster memory access ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
