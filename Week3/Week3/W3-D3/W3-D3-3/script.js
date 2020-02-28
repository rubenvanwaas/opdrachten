const movieGenres = async function() {
    const data = await getData();
    genres = data.genres;
    console.log("movie genres: ", genres);
    return genres;

  };
  
movieGenres();

const createList = async function () {
  const data = await getData();
  genres = data.genres;
  genres.forEach(genre => {
    let li = document.createElement('li');
    let listName = document.getElementById('genreList');
    let liContent = document.createTextNode
    (`genre naam: ${genre.name}, id: ${genre.id} `);
    listName.appendChild(li);
    li.appendChild(liContent);
  })
}

createList();

const lionKing = async function() {
  const data = await getNewData();
  info = data.movie_results[0].title;
  console.log("name: ", info);

  let li = document.createElement('li');
  let listName = document.getElementById('favMovie');
  let liContent = document.createTextNode(`Favoriete film: ${info}`)

  listName.appendChild(li);
  li.appendChild(liContent);

};

lionKing();

const topRated = async function() {
  const data = await getTopRatedData();
  movies = data.results.slice(0,10);
  const titles = movies.map(movie => movie.title);
  console.log("Top 10 Rated: ", titles);

  titles.forEach(title => {
    let li = document.createElement('li');
    let listName = document.getElementById('topRated');
    let liContent = document.createTextNode
    (`${title}`);
    listName.appendChild(li);
    li.appendChild(liContent);
  })
};

topRated();

const topRatedAction = async function() {
  const data = await getTopRatedActionData();
  movies = data.results.slice(0,10);
  const titles = movies.map(movie => movie.title);
  console.log("Top 10 Rated Action: ", titles);

  titles.forEach(title => {
    let li = document.createElement('li');
    let listName = document.getElementById('topRatedAction');
    let liContent = document.createTextNode
    (`${title}`);
    listName.appendChild(li);
    li.appendChild(liContent);
  })
};

topRatedAction();

const getYear1975 = async function() {
  const data = await get1975Data();
  movies = data.results.slice(0,10);
  const titles = movies.map(movie => movie.title);
  console.log("Year 1975: ", titles);

  titles.forEach(title => {
    let li = document.createElement('li');
    let listName = document.getElementById('year1975');
    let liContent = document.createTextNode
    (`${title}`);
    listName.appendChild(li);
    li.appendChild(liContent);
  })
};

getYear1975();