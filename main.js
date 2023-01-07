var container = document.getElementById('contain');
var guessResult = document.getElementById('result');
var inputValue = document.getElementById('guessNo');
let score = 0;
let counter = 0
let scoreDisplay = document.querySelector('#score');
let questionCount = document.querySelector('#counter');
let form = document.querySelector('.form');
form.addEventListener('submit', getResult);


function getResult(e){
  e.preventDefault()
  if (inputValue.value === '') {
    guessResult.innerHTML = 'Input a Number'
  } else if (inputValue.value > 5) {
    guessResult.innerHTML = 'Value not in Range';
    inputValue.value = '';
  } else {
    e.preventDefault();
		var randomValue = Math.floor(Math.random() * 5 + 1);
		let valueInput = parseInt(inputValue.value);
		checkResult =
			valueInput == randomValue
				? 'Correct : ' + randomValue + ' &#x2714;'
				: 'Wrong : ' + randomValue + ' &#x2715;';

		if (valueInput == randomValue) {
			score++;
		}
    counter++
		guessResult.innerHTML = checkResult;
		inputValue.value = '';
		scoreDisplay.innerHTML = score;
		questionCount.innerHTML = counter;
    console.log(score);
    if (counter === 5) {
      setTimeout(() => {
        document.location.reload();
      },2000)
    }
    console.log(counter)
  }
  

}



document.addEventListener('DOMContentLoaded', ()=>{
  scoreDisplay.innerHTML = 0;
  questionCount.innerHTML = 0;
})
//code
