/*import {api} from './credential.js';*/
const api = "api_key=459fb7e2ea747ba6faae24d24ad6cbe2";
const base_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  //this truncate function on being called after refreshing the page check the condition that if string length in greater than 190 then 
  //prints the string length n-1 with a further addition ...
}
//bannner part
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.querySelector(".banner");
    var banner_Title = document.querySelector(".banner_Title");
    var banner_desc = document.querySelector(".banner_Description");
    banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 190);
    banner_Title.innerText = setMovie.name;
  })


var count = 0;
const fetchdetails = (url, titlename) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      count = count + 1;
      const headrow = document.querySelector(".headrow");
      const row = document.createElement("div");
      row.className = "row";
      headrow.appendChild(row);
      const title = document.createElement("h2");
      title.className = "row__title";
      title.innerText = titlename;
      row.appendChild(title);
      const cover = document.createElement("div");
      cover.className = "cover";
      headrow.appendChild(cover);
      const left = document.createElement("button");
      left.className = "left";
      left.setAttribute("onclick", "leftScroll" + count + "()");
      cover.appendChild(left);
      const ibutton = document.createElement("i");
      ibutton.className = "fas fa-angle-left";
      left.appendChild(ibutton);
      const scrollImg = document.createElement("div");
      scrollImg.className = "scroll-images" + count;
      cover.appendChild(scrollImg);
      data.results.forEach(movie => {
        const child = document.createElement("div");
        child.className = "child";
        scrollImg.appendChild(child);
        const poster = document.createElement("img");
        poster.className = "child-img";
        var s = movie.id;
        poster.id = s;
        poster.src = img_url + movie.poster_path;
        child.appendChild(poster);
      });
      const right = document.createElement("button");
      right.className = "right";
      right.setAttribute("onclick", "rightScroll" + count + "()");
      cover.appendChild(right);
      const rbutton = document.createElement("i");
      rbutton.className = "fas fa-angle-right";
      right.appendChild(rbutton);
    });
}

const leftScroll1 = () => {
  const left = document.querySelector(".scroll-images1");
  left.scrollBy(-200, 0);
}
function leftScroll2() {
  const left = document.querySelector(".scroll-images2");
  left.scrollBy(-200, 0);
}
function leftScroll3() {
  const left = document.querySelector(".scroll-images3");
  left.scrollBy(-200, 0);

}
function leftScroll4() {
  const left = document.querySelector(".scroll-images4");
  left.scrollBy(-200, 0);
}
function leftScroll5() {
  const left = document.querySelector(".scroll-images5");
  left.scrollBy(-200, 0);

}
function leftScroll6() {
  const left = document.querySelector(".scroll-images6");
  left.scrollBy(-200, 0);
}
function leftScroll7() {
  const left = document.querySelector(".scroll-images7");
  left.scrollBy(-200, 0);

}
function leftScroll8() {
  const left = document.querySelector(".scroll-images8");
  left.scrollBy(-200, 0);
}
function rightScroll1() {
  const right = document.querySelector(".scroll-images1");
  right.scrollBy(200, 0);

}
function rightScroll2() {
  const right = document.querySelector(".scroll-images2");
  right.scrollBy(200, 0);
}
function rightScroll3() {
  const right = document.querySelector(".scroll-images3");
  right.scrollBy(200, 0);

}
function rightScroll4() {
  const right = document.querySelector(".scroll-images4");
  right.scrollBy(200, 0);
}
function rightScroll5() {
  const right = document.querySelector(".scroll-images5");
  right.scrollBy(200, 0);

}
function rightScroll6() {
  const right = document.querySelector(".scroll-images6");
  right.scrollBy(200, 0);
}
function rightScroll7() {
  const right = document.querySelector(".scroll-images7");
  right.scrollBy(200, 0);

}
function rightScroll8() {
  const right = document.querySelector(".scroll-images8");
  right.scrollBy(200, 0);
}

fetchdetails(requests.fetchNetflixOrignals,"NETFLIX ORIGINAL"); //loads the url and title name
fetchdetails(requests.fetchPopular,"POPULAR");
fetchdetails(requests.fetchTrending,"TRENDING");
fetchdetails(requests.fetchRomanceMovies,"ROMANCE");
fetchdetails(requests.fetchHorrorMovies,"HORROR");
fetchdetails(requests.fetchComedyMovies,"COMEDY");
fetchdetails(requests.fetchActionMovies,"ACTION");
fetchdetails(requests.fetchDocumentaries,"DOCUMENTARIES");



document.addEventListener(
  'scroll',(event) => {
    scroll = window.scrollY;
    if(scroll >= 120){
      const navbar = document.querySelector(".nav");
      navbar.classList.add('bg');
    }
  }
);

const hamBurgerNavbar = document.querySelector(".ham-burger");
hamBurgerNavbar.classList.add("none");

var temp=0;
const browse = document.querySelector(".submenu");
browse.addEventListener("mouseover", () => visible())

const visible = () => {
    temp=temp+1;
    const listData = document.querySelector(".ham-burger__navbar");
    listData.classList.remove("hide");

}

browse.addEventListener("mouseout", () => hidedata())

const hidedata = () => {
    temp=temp+1;
    const listData = document.querySelector(".ham-burger__navbar");
    listData.classList.add("hide");

}












