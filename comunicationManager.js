export async function getPelis() {
    let response = await fetch("http://www.omdbapi.com/?s=avengers&apikey=ef59fad");
    let pelis = await response.json();
    console.log(pelis.Search);
    return pelis.Search;
}