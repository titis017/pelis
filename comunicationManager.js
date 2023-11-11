export async function getPelis() {
    try {
        let response = await fetch("http://www.omdbapi.com/?s=superman&apikey=ef59fad");
        if (!response.ok) {
            throw new Error(`Error en la llamada a la API: ${response.status}`);
        }
        let pelis = await response.json();
        console.log(pelis);
        return pelis;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}