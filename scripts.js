const accessKey = '5881028'

generateBtn = document.getElementById('resultButton')
result = document.getElementById('result')

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