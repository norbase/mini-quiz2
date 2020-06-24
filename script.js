// 1. Created a multidimensional array to hold quiz questions and answers
const questions = [
  [ "Who was the lead singer (full name) of Linkin Park?", "chester bennington" ],
  [ "Which Linkin Park song was featured in the first live-action Transformers movie?", "what i've done" ],
  [ "Which member (full name) of Linkin Park is considered to be the 'rapper'?", "mike shinoda" ],
  [ "What was the name of the first Linkin Park 'remix' album?", "reanimation" ],
  [ "Prior to July 2017, how many total members were in Linkin Park?", 6 ]
  ];
  
  // 2. Store the number of questions answered correctly/incorrectly
  const correct = [];
  const incorrect = [];
  
  /* 
    3. Using a loop to cycle through each question
        - Present each question to the user
        - Compare the user's response to answer in the array
        - If the response matches the answer, the number of correctly
          answered questions increments by 1
  */
 let correctCount = 0;
  
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    
    if (response === null || response === undefined || response === '') {
      console.log("ERROR:", "User skipped this question: " + question + " Refresh page to try again.")
      if (response !== answer) {
       incorrect.push(question); 
      }
      continue;
    }
    
    if (typeof answer === typeof 1) {
      response = parseInt(response);
    }
    if (typeof answer === "string") {
      response = response.toLowerCase();
    }
    
    if (response === answer) {
      correctCount += 1;
      correct.push(question);
    } else {
      incorrect.push(question);
    }
  }
  
  function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }
  
  // 4. Displays the number of correct answers to the user
  let html = `
    <h1>You got ${correctCount} question(s) correct!</h1>
    <h2>You got these questions right:</h2>
    <ol>${createListItems(correct)}</ol>
  
    <h2>You got these questions wrong:</h2>
    <ol>${createListItems(incorrect)}</ol>
    <h5><a href="https://www.github.com/norbase" style="color: #fff">github.com/norbase</a><h5>
   `;
    
  document.querySelector('main').innerHTML = html;