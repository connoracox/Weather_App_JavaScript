
const resultContainer = document.getElementById('results')

async function getWeather(cityName) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&appid=${APIKey}`)
    const data = await response.json()
    
    let fahrenheitMin = ((data.main.temp_min - 273.15)*1.8) + 32
    let fahrenheitMax = ((data.main.temp_max - 273.15)*1.8) + 32
    let fahrenheitNow = ((data.main.temp - 273.15)*1.8)+32

    resultContainer.innerHTML =``
    resultContainer.innerHTML += `

        
        <p class="currentTemp">${Math.round(fahrenheitNow)} ℉ </p><br>
        <p class="conditions">${data.name}</><br>
        <p class="conditions">${data.weather[0].main}</p><br>
        <p class="conditions">Low: ${Math.round(fahrenheitMin)} ℉  || High: ${Math.round(fahrenheitMax)} ℉ </p><br>
        <p class="conditions">Humidity: ${data.main.humidity} %</p><br><br>

        `  
        
}


// let fahrenheitMin = ((K-273.15)*1.8)+32
// let fahrenheitMax = ((K-273.15)*1.8)+32

const weatherSearchForm = document.getElementById('weatherSearch')

weatherSearchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const idInputOne = weatherSearchForm.querySelector('#cityName')
    // const reloadSearchForm = document.querySelector('.json').innerHTML = ''
    getWeather(idInputOne.value)
    idInputOne.value = ''
    
    

})

const reloadform = document.querySelector('#reload')
reloadform.addEventListener('click', () => {
    window.location.reload(true);
})