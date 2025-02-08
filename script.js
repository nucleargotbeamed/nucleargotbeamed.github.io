document.getElementById('submit').addEventListener('click', () => {
  const answer = document.getElementById('answer1').value.trim();
  const resultDiv = document.getElementById('result');
  
  let correctAnswer = "6";  // The answer for the given image
  
  if (answer === correctAnswer) {
    resultDiv.textContent = "Correct! You may not have color vision deficiency.";
  } else {
    resultDiv.textContent = "Incorrect. You might have a color vision deficiency.";
  }
});
