'use strict';


const store = {
  questions: [
    {
      question: 'Which of the following used a Ponzi scheme to defraud billions of dollars from investors until he was caught in 2008?' 
      ,
      answers: [
        'Satoshi Nakamoto',
        'Benjamin Graham',
        'Bernie Madoff',
        'David Einhorn'
      ],
      correctAnswer: 'Bernie Madoff'
    },
    {
      question: 'Who famously shorted the British pound to make over a billion dollars on a single trade?',
      answers: [
        'George Soros',
        'Bill Ackman',
        'Benjamin Graham',
        'Satoshi Nakamoto'
      ],
      correctAnswer: 'George Soros'
    }
  ],
  questionNumber: 1,
  score: 1,
  quizStarted: false,
};

function renderLandingPage(){
  console.log('landing page rendering function working');
  $('#container').html(`<section class="welcome-screen">
  <header>
    <h1>Welcome!</h1>
  </header>
  <main>
    <form class="pageOneForm"><button type='submit' class="start-button">Start Quiz!</button></form>
    <p>How well do you know the world’s most famous investors?</p>
  </main>
  </section>`);
  $('main').on('submit', '.pageOneForm', event => {
    event.preventDefault();
    console.log('submit event function working');
  });

}

function renderQuestionPage() {
  console.log('question page rendering function working');
  $('#container').html(`<section class="question-screen" id="question-one">
  <header>
    <p>Current Question: 3</p>
    <p>Current Score: 1</p>
  </header>
  <main>
    <h1>Which of the following used a Ponzi scheme to defraud billions of dollars 
        from investors until he was caught in 2008?</h1>
    <form>
      <input type="radio" id="answer-one" name="answer" value="answer">
      <label for="answer">Satoshi Nakamoto</label><br>
      <input type="radio" id="answer-two" name="answer" value="female">
      <label for="answer">Benjamin Graham</label><br>
      <input type="radio" id="answer-three" name="answer" value="other">
      <label for="answer">Bernie Madoff</label><br>
      <input type="radio" id="answer-four" name="answer" value="other">
      <label for="answer">David Einhorn</label><br>
      <button type="submit">Submit</button>
    </form>

  </main>
</section>`);

}

function renderFeedbackPage() {
  console.log('feedback page rendering function working');

}

function renderSummaryPage() {
  console.log('summary page rendering function working');

}

function main() {
  renderLandingPage();
  // renderQuestionPage();
  renderFeedbackPage();
  renderSummaryPage();
}

// $(main);

/** RENDER FUNCTION */
function render() {

}

/** TEMPLATE GENERATOR FUNCTIONS */

// landing page 

function generateLandingPageString() {
  let landingPageString = `<section class="welcome-screen">
  <header>
    <h1>Welcome!</h1>
  </header>
  <main>
    <form class="pageOneForm"><button type='submit' class="start-button">Start Quiz!</button></form>
    <p>How well do you know the world’s most famous investors?</p>
  </main>
  </section>`;
  return landingPageString;
}

// question page
function generateQuestionPageString() {
  let questionString = store.questions[store.questionNumber - 1].question;
  let questionPageString = `<section class="question-screen" id="question-one">
  <header>
    <p>Question Number: ${store.questionNumber}</p>
    <p>Current Score: ${store.score}</p>
  </header>
  <main>
    <h1>${questionString}</h1>
    <form>
      <input type="radio" id="answer-one" name="answer" value="answer">
      <label for="answer">Satoshi Nakamoto</label><br>
      <input type="radio" id="answer-two" name="answer" value="female">
      <label for="answer">Benjamin Graham</label><br>
      <input type="radio" id="answer-three" name="answer" value="other">
      <label for="answer">Bernie Madoff</label><br>
      <input type="radio" id="answer-four" name="answer" value="other">
      <label for="answer">David Einhorn</label><br>
      <button type="submit">Submit</button>
    </form>

  </main>
</section>`;

  return questionPageString;
}

// feedback page

// summary page

/** EVENT HANDLER FUNCTIONS */

// landing page start quiz submit event

// question page submit answer event

// feedack page continue to next question submit event

// summary page restart quiz submit event


/** RESET FUNCTION */
function reset() {
  // reset question and number correct counters
  
  // set quiz started (boolean) property to false
}



function runQuizApp() {
  render();
  console.log(generateQuestionPageString());
  
  
  // call each event handler function

}

runQuizApp();







/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */