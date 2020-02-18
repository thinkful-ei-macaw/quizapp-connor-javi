/*eslint-env jquery*/

'use strict';
const store = {
  questions: [
    {
      question:
        'Which of the following used a Ponzi scheme to defraud billions of dollars from investors until he was caught in 2008?',
      pictureSrc: 'https://themerkle.com/wp-content/uploads/2016/10/shutterstock_387671092.jpg',
      pictureAlt: 'A house of cards made out of money',
      answers: ['Satoshi Nakamoto', 'T. Boone Pickens', 'Bernie Madoff', 'David Einhorn'],
      correctAnswer: 'Bernie Madoff'
    },
    {
      question: 'Who famously shorted the British pound to make over a billion dollars on a single trade?',
      pictureSrc: 'https://content.fortune.com/wp-content/uploads/2015/07/stocks-1280x720.jpg?resize=750,500',
      pictureAlt: 'British pound bank notes',
      answers: ['George Soros', 'Bill Ackman', 'John Templeton', 'Marc Andreessen'],
      correctAnswer: 'George Soros'
    },
    {
      question: 'Who was the first investor in Facebook, co-founded PayPal and is a Partner at Founders Fund?',
      pictureSrc: 'https://scalar.usc.edu/works/farnham-research/media/facebook-historical-user-count-graph.png',
      pictureAlt: 'Facebook monthly active users over time',
      answers: ['Mark Zuckerberg', 'Peter Thiel', 'Peter Lynch', 'Donald Trump'],
      correctAnswer: 'Peter Thiel'
    },
    {
      question: 'Who is considered the father of value investing and wrote the book Securities Analysis?',
      pictureSrc:
        'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F140833%2Fvalue-investing.jpg&w=700&op=resize',
      pictureAlt: 'Value investing is investing with a margin of safety',
      answers: ['Benjamin Graham', 'Jonathan Lennon', 'Carl Icahn', 'David Tepper'],
      correctAnswer: 'Benjamin Graham'
    },
    {
      question:
        'Which of the following investors founded Renaissance Technologies which pioneered quantitative investing and returned 98% in 2008 vs. a 38% loss for the S&P 500?',
      pictureSrc: 'https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2017/02/Picture3.png',
      pictureAlt: 'Renaissance Technologies flagship fund is beating the market',
      answers: ['Jeff Bezos', 'Suze Orman', 'Mark Cuban', 'Jim Simons'],
      correctAnswer: 'Jim Simons'
    }
  ],
  questionNumber: 1,
  numberOfQuestions: 5,
  score: 0,
  quizStarted: false
};

/** RENDER FUNCTION */
function render() {
  if (store.quizStarted === false) {
    $('#container').html(generateLandingPageString());
  } else if (store.questionNumber > store.numberOfQuestions) {
    $('#container').html(generateSummaryPageString());
  } else {
    $('#container').html(generateQuestionPageString());
  }

  // if (store.quizStarted === false) {
  //   $('body').html(generateLandingPageString());
  // } else {
  //   $('body').html(generateSummaryPageString());
  // }
}

/** TEMPLATE GENERATOR FUNCTIONS */

// landing page string generator +

function generateLandingPageString() {
  let landingPageString = `<section id="welcome-screen">
    <h1>How well do you know the world’s most famous investors?</h1>
    <img id='first-image' src='https://www.fortunebuilders.com/wp-content/uploads/2013/09/Fotolia_44620121_Subscription_Monthly_M1-1024x768.jpg)' alt='Investors in suits walking on the globe'
    <p>
    <form id="pageOneForm">
    <button type='submit' id="start-button">Start Quiz!</button>
    </form>
    </p>
    </section>
  `;
  return landingPageString;
}

// question page string generator +
function generateQuestionPageString() {
  let currentQuestion = store.questionNumber - 1;
  const questionObject = store.questions[currentQuestion];

  return `<section class="question-screen">
  <div id='question-details'>
    <p class='toppers'>Question: ${store.questionNumber}</p>
    <p class='toppers'>Score: ${store.score}</p>
  </div>
  <main>
    <img src='${questionObject.pictureSrc}' alt='${questionObject.pictureAlt}'>
    <h1>${questionObject.question}</h1>
    <form id='question-form'>
      <input type="radio" id="choice-one" name="answer" value='${questionObject.answers[0]}'>
      <label for="choice-one">${questionObject.answers[0]}</label><br>
      <input type="radio" id="choice-two" name="answer" value='${questionObject.answers[1]}'>
      <label for="choice-two">${questionObject.answers[1]}</label><br>
      <input type="radio" id="choice-three" name="answer" value='${questionObject.answers[2]}'>
      <label for="choice-three">${questionObject.answers[2]}</label><br>
      <input type="radio" id="choice-four" name="answer" value='${questionObject.answers[3]}'>
      <label for="choice-four">${questionObject.answers[3]}</label><br>
      <button type="submit" id='submit-answer'>Submit Answer</button>
    </form>

  </main>
</section>`;
}

// feedback page string generator (correct) +
function generateFeedbackPageCorrectString() {
  let feedbackPageString = `
      <section class="correct-screen">
      <p>Correct!!</p>
      <p>Your score is now: ${store.score}</p>
      <form id='feedback-form'>
      <button type='submit' class="next-button">Continue</button>
      </form>
      <p>Press continue to move on to question ${store.questionNumber + 1}</p>
      </section>`;
  return feedbackPageString;
}

// feedback page string generator (incorrect) +
function generateFeedbackPageIncorrectString() {
  let correctAnswerString = store.questions[store.questionNumber - 1].correctAnswer;
  let feedbackPageString = `<section class="incorrect-screen"><p>Sorry, the correct answer is: ${correctAnswerString}</p>
    <p>Your score is now: ${store.score}</p>
    <form id='feedback-form'>
    <button type='submit' class="next-button">Continue</button>
    </form>
    <p>Press continue to move on to question ${store.questionNumber + 1}</p></section>`;

  return feedbackPageString;
}

// summary page string generator +
function generateSummaryPageString() {
  let summaryPageString = `<section id='summary-page'>
  <header>
    <h1>Quiz Over!</h1>
  </header>
  <main id='summary'>
    <p>You got ${store.score}/5 Questions Correct</p>
    <form id='restart-form'>
    <button type='submit' id='restart-button'>Retake Quiz</button>
    </form>
    <p>Press the retake quiz button to take the quiz again</p>
  </main>
  </section>`;

  return summaryPageString;
}

/** EVENT HANDLER FUNCTIONS */

// landing page start quiz submit event handler +
function landingPageSubmitEventHandler() {
  $('#container').on('submit', '#pageOneForm', () => {
    store.quizStarted = true;
    //render();
    render();
  });
}

// question page submit answer event handler +
function questionPageSubmitAnswerEventHandler() {
  console.log('question page event handler');
  $('#container').on('submit', '#question-form', event => {
    event.preventDefault();
    event.stopPropagation();
    let selectedOption = $('input[type="radio"]:checked').val();
    let rightAnswer = store.questions[store.questionNumber - 1].correctAnswer;
    console.log(selectedOption);
    if (selectedOption === rightAnswer) {
      // increment score
      store.score++;
      render();
      // append feedback page html to container div
      $('#container').append(generateFeedbackPageCorrectString);
      $('#question-form').hide();
    } else {
      // append feedback page html to container div
      $('#container').append(generateFeedbackPageIncorrectString);
      $('#question-form').hide();
    }
    console.log('appended feedback html');
  });

  // hide submit answer choice button and show continue to next question button
  // $('.next-button').show(); - not necessary because included in appended html
  $('.submit-button').hide();
}

// feedback page next button event handler +
function feedbackPageNextButtonEventHandler() {
  $('#container').on('submit', '#feedback-form', event => {
    event.preventDefault;
    // increment question counter in store
    store.questionNumber++;
    render();
  });
}

// summary page restart quiz event handler
function summaryPageRestartEventHandler() {
  $('#container').on('submit', '#restart-form', event => {
    event.preventDefault();
    reset();
    render();
  });
}

/** RESET FUNCTION + */
function reset() {
  // reset question and number correct counters, and set quizStarted to false
  store.questionNumber = 1;
  store.score = 0;
  store.quizStarted = false;
}

function runQuizApp() {
  render();
  // call each event handler function

  landingPageSubmitEventHandler();
  questionPageSubmitAnswerEventHandler();
  feedbackPageNextButtonEventHandler();
  summaryPageRestartEventHandler();
}

$(runQuizApp());

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
