var panel = $("#quiz-area");

// Question
var questions = [{
  question: "What Pixar movie stared Mike Wazowski ?",
  answers: ["A Bug's Life", "Toy Story", "The Incredibles", "Monsters Inc."],
  correctAnswer: "Monsters Inc."
}, {
  question: "Which Beatle was nicked named The Quiet Beatle ?",
  answers: ["George Harrison", "Ringo Star", "John Lennon", "Paul McCartney"],
  correctAnswer: "George Harrison"
}, {
  question: "What year did the New York Mets win their first world series ?",
  answers: ["1962", "1965", "1969", "1972"],
  correctAnswer: "1969"
}, {
  question: "What year did Orson Welles win an Oscar for \"Citizen Kane\" ?",
  answers: ["1925", "1945", "1941", "Never won an Oscar"],
  correctAnswer: "1941"
}, {
  question: "In the movie \"2001: A Space Odyseey\" what was the ships compters name ?",
  answers: ["BAL", "IBM", "HAL", "SAM"],
  correctAnswer: "HAL"
}, {
  question: "Who was the first American astronaut to walk on the Moon ?",
  answers: ["Michael Collins", "Neil Armstong", "Buzz Lightyear", "Sam Shepard"],
  correctAnswer: "Neil Armstong"
}, {
  question: "What was the name of Snoopy's side kick ?",
  answers: ["Betty Boop", "Sally", "Woodstock", "Pig Pen"],
  correctAnswer: "Woodstock"
}, {
  question: "Who played drums in the rock band \"The Who\" ?",
  answers: ["Kenny Jones", "Ring Star", "Kieth Moon", "Pete Townsend"],
  correctAnswer: "Kieth Moon"
}];

// Variable for timer
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1500);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>How did you do ?</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// Events

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
