'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function ()  {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?"," ");
    while (personalMovieDB.count == '' || personalMovieDB.count == null ||  isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?"," "); 
    }
    },
    redmemberMyFilms: function()    {
        for(let i = 1; i<3; i++){
         let Q1 = prompt('Один из просмотренных фильмов?');
         let Q2 = prompt('На сколько оцените его?');
         if(Q1 != "" && Q2 != "" && Q1 !=null && Q2 !=null )   {
            personalMovieDB.movies[Q1] = Q2;
         }  else {
             i--;}
        
        }
        },
        detectPesonalLevel: function()  {
            let count = personalMovieDB.count;
            if(count < 10 ){
                console.log('Вы посмотрели очень мало фильмов');
            } else if(personalMovieDB.count >= 10 || count <= 30 ){
                console.log('Вы классический зритель');
            } else if(count > 30){
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }
            },
                writeYourGenres: function() {
                    for(let i = 1;i<3;i++){
                        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                    if(personalMovieDB.genres[i - 1] == "" || personalMovieDB.genres[i - 1] == null){
                        i--;
                    }
                }
                personalMovieDB.genres.forEach(
                    function(item, i){
                        console.log(`Любимый жанр #${i} - ${item}`);
                    });
            },
            showMyDB: function() {
                if(personalMovieDB.privat == false){
                    console.log(personalMovieDB);
                } else {
                    console.log('Нету доступа к вашей базе данных');
                }
            },
            toggleVisibleMyDB : function(){
                if(personalMovieDB.privat == false){
                    personalMovieDB.privat = true;
                } else if (personalMovieDB.privat == true){
                    personalMovieDB.privat = false;
                }
            }
};
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
