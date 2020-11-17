'use strict';
let numberOfFilms = prompt("Сколько фильмов вы посмотрели?"," ");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

let Question = [];
let Raiting = [];

for(let i = 1; i < 3; i++){
     Question[i] = prompt("Один из последних просмотренных фильмов?");
     Raiting[i] = prompt("Насколько оцените его?");
     
     if(i <= 0){
        i++;
    }

     if(numberOfFilms == "" || numberOfFilms == null){
        let numberOfFilms = prompt("Сколько фильмов вы посмотрели?"," ");
         i--;
    } 
    if (Question[i] == "" || Question[i] == null || Question[i].lenght > 50){
        i--;
    } else if(Raiting[i] == "" || Raiting[i] == null){
        i--;
    }  else {
        personalMovieDB.movies[Question[i]] = Raiting[i];}
    }


console.log(personalMovieDB.movies);
if(personalMovieDB.count < 10 && personalMovieDB.count > 0){
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >=10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
} else if( personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else  {
    console.log("Произошла ошибка");
}