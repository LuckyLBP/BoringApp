

///// ACTIVITY /////
generateBtn = document.getElementById('resultButton')
result = document.getElementById('result-activity')

async function generateAct() {

    const url = `http://www.boredapi.com/api/activity/`

    const response = await fetch(url)
    const data = await response.json()

    result.innerText = data.activity;
    console.log(data);
}

generateBtn.addEventListener('click', () => {
    generateAct()
})

///// JOKES /////
generateBtnJoke = document.getElementById('resultButton-jokes')
resultJoke = document.getElementById('result-jokes')

async function generateJoke() {

    const url = `https://v2.jokeapi.dev/joke/Dark,Pun?type=single`

    const response = await fetch(url)
    const data = await response.json()

    resultJoke.innerText = data.joke;
}

generateBtnJoke.addEventListener('click', () => {
    generateJoke()
})