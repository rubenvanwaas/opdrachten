const API_KEY = "3730cf55132fb30121deb539ca60ad13";

const getData = async function () {
    try {
    let apiUrl =  `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getData function ", res);
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
    }
    catch (error) {
        console.log(error);
    }
}




