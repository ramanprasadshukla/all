// document.addEventListener('DOMContentLoaded', function() {

//     const home = document.querySelector('#home');
//     const home2 = document.querySelector('#home2');
//     const st = document.querySelector('#sample-test');
//     const static = document.querySelector('#static');
//     const recent = document.querySelector('#recent');
//     const st2 = document.querySelector('#s-test2');
//     const static2 = document.querySelector('#static2');
//     const recent2 = document.querySelector('#recent2');
//     const recentResult = document.getElementById('recent-result'); // Recent result display

//     // Load recent result from local storage on page load
//     const savedResult = localStorage.getItem('recentQuizResult');
//     if (savedResult) {
//         recentResult.textContent = savedResult;
//     }

//     home2.addEventListener('click', function () {
//         home.style.display = 'block';
//         st.style.display = 'none';
//         static.style.display = 'none';
//         recent.style.display = 'none';
//     });

//     static2.addEventListener('click', function () {
//         static.style.display = 'block';
//         home.style.display = 'none';
//         st.style.display = 'none';
//         recent.style.display = 'none';
//     });

//     recent2.addEventListener('click', function () {
//         recent.style.display = 'block';
//         home.style.display = 'none';
//         st.style.display = 'none';
//         static.style.display = 'none';
//     });

//     st2.addEventListener('click', function () {
//         st.style.display = 'block';
//         home.style.display = 'none';
//         static.style.display = 'none';
//         recent.style.display = 'none';
//     });

//     document.getElementById('submit-quiz').addEventListener('click', function () {

//         const correctAnswers = {
//             q1: '8',
//             q2: '6',
//             q3: '9',
//             q4: '5',
//             q5: '4',
//             q6: '42',
//             q7: '10',
//             q8: '81',
//             q9: '25',
//             q10: '144'
//         };

//         let score = 0; // Initialize score
//         const totalQuestions = Object.keys(correctAnswers).length; // Total number of questions
//         const form = document.getElementById('quiz-form'); // Quiz form
//         const resultDiv = document.getElementById('quiz-result'); // Result display div

//         // Loop through each question and check the selected answer
//         for (const question in correctAnswers) {
//             const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
//             if (selectedOption && selectedOption.value === correctAnswers[question]) {
//                 score++; // Increment score for correct answers
//             }
//         }

//         // Display the result
//         resultDiv.textContent = `You scored ${score} out of ${totalQuestions}!`;

//         // Add dynamic styling to the result
//         if (score === totalQuestions) {
//             resultDiv.style.color = 'green'; // Perfect score
//         } else if (score > 0) {
//             resultDiv.style.color = 'orange'; // Partial score
//         } else {
//             resultDiv.style.color = 'red'; // No correct answers
//         }

//         // Update the recent section with the result
//         const resultText = `You scored ${score} out of ${totalQuestions} in your last quiz.`;
//         recentResult.textContent = resultText;

//         // Save the result to local storage
//         localStorage.setItem('recentQuizResult', resultText);

//         // Reset the form to clear selected options
//         form.reset();
//     });
// });


const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[10]);
    });