let myFavMovie = {
    title: "Be Cool",
    duration: 120,
    stars: ["Owen", "Patrick", "Susan"]
};

const movie = function (movie) {
    console.log(myFavMovie.title + " Lasts for " + myFavMovie.duration + " minutes. ");
    console.log("It stars: " + myFavMovie.stars.join(" "))  
}


movie(myFavMovie)