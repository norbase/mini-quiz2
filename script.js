// 1. Created a multidimensional array to hold quiz questions and answers
const questions = [
  [ "Who was the lead singer (full name) of Linkin Park?", "chester bennington" ],
  [ "Which Linkin Park song was featured in the first live-action Transformers movie?", "what i've done" ],
  [ "What is the last name of Linkin Park's 'rapper/lyricist'?", "shinoda" ],
  [ "What was the name of the first Linkin Park 'remix' album?", "reanimation" ],
  [ "Prior to July 2017, how many total members were in Linkin Park?", 6 ],
  [ "What is the name of the Linkin Park/Jay-Z collaboration album?", "collision course"],
  [ "Who was riding along with the Linkin Park on the show 'Carpool Karaoke'?", "ken jeong"],
  [ "What is the title of Linkin Park's first debut single?", "one step closer"],
  [ "Complete the missing lyrics: '...these wounds, they will not heal. _____________. Confusing what is real.'", "fear is how i fall"]
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

function refreshPage() {
  if (performance.navigation.type === 1) {
    alert("Retry?! I mean... come on. In the end, it doesn't even matter. =P");
    // future version to include refresh to 'index.html' without script from 'page1' reloading
    window.location.replace('index.html');
  } else {
    askAndCollect();
  }
}
refreshPage();

function askAndCollect(arr) {
  // let correctCount = 0;

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
      if (response === answer) {
        correct.push(question);
        continue;
      } else {
        incorrect.push(question);
        continue;
      }
    }
    if (typeof answer === "string") {
      response = response.toLowerCase();
    }
    if (response === answer + " ") {
      response = response.trimRight();
    }
    if (response === answer) {
      // correctCount += 1;
      correct.push(question);
    } else if (response.trimRight() === "what i’ve done") {
      correct.push(question);
    } else {
      incorrect.push(question);   
    }
  }
}


function getTotals(arr) {
  return correct.length;
}

  function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }
  
  // 4. Displays the number of correct answers to the user
function createHTML() {
  let html = `
  <h1>You got ${getTotals()} question(s) correct!</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correct)}</ol>
  
  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(incorrect)}</ol>
  <h5><a href="https://www.github.com/norbase" style="color: #fff">github.com/norbase</a><h5>
  `;
  return html;
}

const printStatus = () => document.querySelector('main').innerHTML = createHTML();
printStatus();