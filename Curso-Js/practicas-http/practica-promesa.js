import fetch from "node-fetch";

const URL = "https://rickandmortyapi.com/api/character"
function GetAPI(urlApi) {
    return fetch(urlApi);
    
}

GetAPI(URL)
    .then(results => {
        results.json();
        console.log(results)
        
    })

    .catch(err => console.error(err))