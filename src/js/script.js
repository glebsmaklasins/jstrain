let numberOfFilms = +prompt ("skoljko filjmov vi posmotreli","");
function start(){
    numberOfFilms = +prompt ("skoljko filjmov vi posmotreli", "");
    
    while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)) {
    
        numberOfFilms = +prompt ("skoljko filjmov vi posmotreli", "");
        
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("malo filjmov smotrish");
    }else if (personalMovieDB.count >10 && personalMovieDB.count <30){
        console.log("vi norm smotrite kinco");
    }else if (personalMovieDB.count >= 30){
        console.log("kinomannnn");
    }else{
        console.log("error");
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i<=3;i++){
        const genre=prompt(`vash ljubimij zhanr pod monerom ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();
console.log(personalMovieDB);

