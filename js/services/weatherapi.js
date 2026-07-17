import { searchCep } from "./viacep.js"

const API_KEY = ''

export async function searchWeather(cep) {
    const adress = await searchCep(cep)
    const city = adress.localidade

    try {
        const weatherInfo = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&current-fields=temp_c,feelslike_c,wind_kph,humidity,precip_mm&lang=pt`)
        const data = await weatherInfo.json()
        return data
    }
    catch (err) {
        throw new Error(`Algo deu errado: Erro: ${err}`)
    }
}
