import { searchWeather } from "../services/weatherapi.js"

const form = document.querySelector("#cep-form")

form.addEventListener("submit", async (event) => {
    
    event.preventDefault()

    try {
        const weatherInfo = await searchWeather(document.querySelector("#cep-input").value)

        document.querySelector("#city-name").innerText = `${weatherInfo.location.name} - ${weatherInfo.location.localtime.slice(11)}`

        document.querySelector("#weather-var-temp").innerText = `${weatherInfo.current.temp_c}°C`
        document.querySelector("#weather-var-feeltemp").innerText = `${weatherInfo.current.feelslike_c}°C`
        document.querySelector("#weather-var-wind").innerText = `${weatherInfo.current.wind_kph} km/h`   
        document.querySelector("#weather-var-humidity").innerText = `${weatherInfo.current.humidity}% `
        document.querySelector("#weather-var-precip").innerText = `${weatherInfo.current.precip_mm}mm`

        document.querySelector(".weather-icon").style.visibility = 'visible'
        document.querySelector("#condition-icon").src = weatherInfo.current.condition.icon
        document.querySelector("#condition").innerText = weatherInfo.current.condition.text
    }
    catch(err)
    {
        console.error("Erro ao buscar dados:", err)
    }
})