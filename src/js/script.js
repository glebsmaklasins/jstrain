const numberOfFilms = +prompt ("skoljko filjmov vi posmotreli");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for(let i=0;i<2;i++){
    const a = prompt("odin iz poslednih prosmotrevajemih filjmov" ,""),
        b= prompt("naskoljko ocenivaesh ?", "");

    if(a!=null && b !=null && a!= "" && b != "" && a.length <50){
        personalMovieDB.movies[a] = b;

        console.log("done");
    }else{
        console.log("error");
        i--;
    }

}
if(personalMovieDB.count < 10){
    console.log("malo filjmov smotrish");
}else if (personalMovieDB.count >10 && personalMovieDB.count <30){
    console.log("vi norm smotrite kinco");
}else if (personalMovieDB.count >= 30){
    console.log("kinomannnn");
}else{
    console.log("error");
}

console.log(personalMovieDB);
