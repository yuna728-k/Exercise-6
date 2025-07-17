function checkAnswers() {
  const answers = {
    q1: "China",
    q2: "USA",
    q3: "Japan",
    q4: "Malaysia",
    q5: "Singapore"
  };

  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const userAnswer = document.getElementById(`q${i}`).value;
    const feedback = document.getElementById(`result-q${i}`);

    if (userAnswer === "") {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "gray";
    } else if (userAnswer === answers[`q${i}`]) {
      feedback.textContent = "✔ Correct!";
      feedback.style.color = "green";
      score++;
    } else {
      feedback.textContent = `❌ Incorrect. Correct answer: ${answers[`q${i}`]}`;
      feedback.style.color = "red";
    }
  }

  const result = document.getElementById("final-result");
  result.textContent = `You got ${score} out of 5 correct.`;
  result.style.color = score === 5 ? "green" : "orange";

  if (score === 5) {
    result.textContent += " 🎉 Perfect!";
  }
}

function resetQuiz() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`q${i}`).value = "";
    document.getElementById(`result-q${i}`).textContent = "";
  }
  const result = document.getElementById("final-result");
  result.textContent = "";
}