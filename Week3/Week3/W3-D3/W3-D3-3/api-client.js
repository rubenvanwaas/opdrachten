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


const getNewData = async function () {
    try {
    let apiUrl =  `https://api.themoviedb.org/3/find/tt6105098?api_key=3730cf55132fb30121deb539ca60ad13&external_source=imdb_id`;
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getNewData function ", res);
    const data = await res.json();
    console.log("The data in getNewData function ", data);
    return data;
    }
    catch (error) {
        console.log(error);
    }

}

const getTopRatedData = async function () {
    try {
    let apiUrl =  `https://api.themoviedb.org/3/movie/top_rated?api_key=3730cf55132fb30121deb539ca60ad13&page=1`;
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getNewData function ", res);
    const data = await res.json();
    console.log("The data in getTopRatedData function ", data);
    return data;
    }
    catch (error) {
        console.log(error);
    }

}

const getTopRatedActionData = async function () {
    try {
    let apiUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=3730cf55132fb30121deb539ca60ad13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getNewData function ", res);
    const data = await res.json();
    console.log("The data in getTopRatedActionData function ", data);
    return data;
    }
    catch (error) {
        console.log(error);
    }

}

const get1975Data = async function () {
    try {
    let apiUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=3730cf55132fb30121deb539ca60ad13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975`;
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getNewData function ", res);
    const data = await res.json();
    console.log("The data in get1975Data function ", data);
    return data;
    }
    catch (error) {
        console.log(error);
    }

}