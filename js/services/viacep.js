export async function searchCep(cep) {
    const formatCep = cep.replace(/\D/g, '')

    if(formatCep.length !== 8)
        throw new Error("Cep inválido")
    
    try {
        let res = await fetch(`https://viacep.com.br/ws/${formatCep}/json/`);
        const data = await res.json()
        return data
    }
    catch (err)
    {
        throw new Error(`Algo deu errado. Erro: ${err}`)
    }
}