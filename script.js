// 1. Multidimensional array that holds quiz questions and answers
const questions = [
  ["Who was the lead singer (full name) of Linkin Park?", "chester bennington"],
  [
    "Which Linkin Park song was featured in the first live-action Transformers movie?",
    "what i've done",
  ],
  ["What is the last name of Linkin Park's 'rapper/lyricist'?", "shinoda"],
  ["What was the name of the first Linkin Park 'remix' album?", "reanimation"],
  ["Prior to July 2017, how many total members were in Linkin Park?", 6],
  [
    "What is the name of the Linkin Park/Jay-Z collaboration album?",
    "collision course",
  ],
  [
    "Who was riding along with the Linkin Park on the show 'Carpool Karaoke'?",
    "ken jeong",
  ],
  ["What is the title of Linkin Park's first debut single?", "one step closer"],
  [
    "Complete the missing lyrics: '...these wounds, they will not heal. _____________. Confusing what is real.'",
    "fear is how i fall",
  ],
];

// 2. Containers that store the questions answered correctly/incorrectly
const correct = [];
const incorrect = [];


/* 
  3. If user reloads the page
      - Alert is presented to user
      - User is redirected to index page
          Otherwise, script will continue to run
*/
function refreshPage() {
  if (performance.navigation.type === 1) {
    alert("Retry?! I mean... come on. In the end, it doesn't even matter. =P");
    // future version to include refresh to 'index.html' without script from 'page1' reloading
    window.location.replace("index.html");
  } else {
    askAndCollect();
  }
}
refreshPage();

/* 
  4. Used a loop to cycle through each question
      - Presents each question to the user
      - Compares the user's response to answer in the array
      - If the response matches the answer, correctly
        answered questions are stored in the 'correct' container;
          Otherwise, the incorrectly answered questions are stored
          in the 'incorrect' container
*/
function askAndCollect(arr) {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response === null || response === undefined || response === "") {
      console.log(
        "ERROR:",
        "User skipped this question: " +
          question +
          " Refresh page to try again."
      );
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

// 5. Returns total number of elements from 'correct' container
function getTotals(arr) {
  return correct.length;
}

// 6. Creates list of items to be displayed onto page
function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 7. Sets up items to be displayed onto page
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

// 8. Displays items onto second page
const printStatus = () =>
  (document.querySelector("main").innerHTML = createHTML());
printStatus();