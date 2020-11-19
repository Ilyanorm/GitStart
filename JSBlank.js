'use strict';

let numberOfFilms;

function start(){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?"," ");
    while (numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?"," "); 
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

function redmemberMyFilms(){
for(let i = 1; i<3; i++){
 let Q1 = prompt('Один из просмотренных фильмов?');
 let Q2 = prompt('На сколько оцените его?');
 if(Q1 != "" && Q2 != "" && Q1 !=null && Q2 !=null )   {
    personalMovieDB.movies[Q1] = Q2;
 }  else {
     i--;}

}
}
redmemberMyFilms();

function detectPesonalLevel(){
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
}
detectPesonalLevel();

function writeYourGenres(){
    for(let i = 1;i<3;i++){
    
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


function showMyDB() {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else {
        console.log('Нету доступа к вашей базе данных');
    }
}
showMyDB();