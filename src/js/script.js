

const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start : function (){
        personalMovieDB.count = +prompt ("skoljko filjmov vi posmotreli", "");
        
        while(personalMovieDB.count =="" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        
            personalMovieDB.count = +prompt ("skoljko filjmov vi posmotreli", "");
            
        }
    },
    rememberMyFilms:function(){
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
    },
    detectPersonalLevel:function(){
        if(personalMovieDB.count < 10){
            console.log("malo filjmov smotrish");
        }else if (personalMovieDB.count >10 && personalMovieDB.count <30){
            console.log("vi norm smotrite kinco");
        }else if (personalMovieDB.count >= 30){
            console.log("kinomannnn");
        }else{
            console.log("error");
        }
    },
    showMyDB:function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB:function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:function(){
        for(let i = 1; i<=3;i++){
            let genre=prompt(`vash ljubimij zhanr pod monerom ${i}`);
            if(genre==="" ||genre == null){
                console.log("vi vveli nekonkretnie dannie");
            }else{
                personalMovieDB.genres[i-1] =genre;
            }
         
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`ljubimj zhanr ${i+1} - eto ${item}`);
        });
    }
};



console.log(personalMovieDB);

