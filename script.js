document.getElementById('submit').addEventListener('click', () => {
  const answer1 = document.getElementById('answer1').value.trim();
  const answer2 = document.getElementById('answer2').value.trim();
  const answer3 = document.getElementById('answer3').value.trim();
  
  const correctAnswers = ["74", "42", "12"];
  let score = 0;

  if (answer1 === correctAnswers[0]) score++;
  if (answer2 === correctAnswers[1]) score++;
  if (answer3 === correctAnswers[2]) score++;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `You got ${score} out of 3 correct!<br>`;
  
  if (score === 3) {
    resultDiv.innerHTML += "Great! You may not have a color vision deficiency.";
  } else {
    resultDiv.innerHTML += "You might have a color vision deficiency. Consider consulting a specialist.";
  }
});
