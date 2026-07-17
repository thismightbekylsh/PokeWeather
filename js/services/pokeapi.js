export async function searchPokemon(name) {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        const data = await res.json()
        return data;
    }
    catch(err) {
        throw new Error(`Algo deu errado. Erro: ${err}`)
    }
}