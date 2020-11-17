let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 1);
let personalMovieDB = {
    count : numberOfFilms   ,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
let LastFilm = prompt("Один из последних просмотренных фильмов?" ,
 "Пример : Шарик"),
 Rate = prompt("На сколько оцените его?", "1-10") ,
 LastFilm2 = prompt("Один из последних просмотренных фильмов?" ,
 "Пример : Шарик"),
 Rate2 = prompt("На сколько оцените его?", "1-10") ;
personalMovieDB.movies[LastFilm] = Rate;
personalMovieDB.movies[LastFilm2] = Rate2;
console.log(personalMovieDB.movies);