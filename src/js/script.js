const numberOfFilms = +prompt ("skoljko filjmov vi posmotreli");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt("odin iz poslednih prosmotrevajemih filjmov" ,""),
        b= prompt("naskoljko ocenivaesh ?", ""),
        c = prompt("odin iz poslednih prosmotrevajemih filjmov" ,""),  
        d= prompt("naskoljko ocenivaesh ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);