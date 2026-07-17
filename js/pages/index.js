import { searchWeather } from "../services/weatherapi.js"
import { searchPokemon } from "../services/pokeapi.js"

const form = document.querySelector("#cep-form")

form.addEventListener("submit", async (event) => {
    
    event.preventDefault()

    try {
        const weatherInfo = await searchWeather(document.querySelector("#cep-input").value)

        const response = await fetch("../../db/weather_pokemon_v2.json")
        const dailyDB = await response.json()
        const dailyPokemon = await searchPokemon(dailyDB[weatherInfo.current.condition.text].pokemon)

        document.querySelector("#city-name").innerText = `${weatherInfo.location.name} - ${weatherInfo.location.localtime.slice(11)}`

        document.querySelector("#weather-var-temp").innerText = `${weatherInfo.current.temp_c}°C`
        document.querySelector("#weather-var-feeltemp").innerText = `${weatherInfo.current.feelslike_c}°C`
        document.querySelector("#weather-var-wind").innerText = `${weatherInfo.current.wind_kph} km/h`   
        document.querySelector("#weather-var-humidity").innerText = `${weatherInfo.current.humidity}% `
        document.querySelector("#weather-var-precip").innerText = `${weatherInfo.current.precip_mm}mm`

        document.querySelector(".weather-icon").style.visibility = 'visible'
        document.querySelector("#condition-icon").src = weatherInfo.current.condition.icon
        document.querySelector("#condition").innerText = weatherInfo.current.condition.text

        document.querySelector("#day-info").innerText = dailyDB[weatherInfo.current.condition.text].descricao
        document.querySelector("#daily-pokemon-name").innerText = (dailyPokemon.species.name.charAt(0).toUpperCase() + dailyPokemon.species.name.slice(1))
        document.querySelector("#daily-pokemon-image").src = dailyPokemon.sprites.front_default
        document.querySelector("#daily-pokemon-image").style.visibility = 'visible'
    }
    catch(err)
    {
        console.error("Erro ao buscar dados:", err)
    }
})