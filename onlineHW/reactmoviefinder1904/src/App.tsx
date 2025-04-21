import { useRef, useState } from 'react';
import styles from './App.module.css'
import findImg from './assets/components/svgs/751463.png'
import closeImg from './assets/components/svgs/3742936.png'


export default function App() {
  const inputvalue = useRef<HTMLInputElement>(null);
  const filmType = useRef<string>("");
  
  const [afterSearch, setAfterSearch] = useState(false);
  const [filmData, setFilmData] = useState<filmElements | null>(null)


  interface filmElements {
    Title: string,
    Year: string,
    Rated: string,
    Genre: string,
    Director: string,
    Actors: string,
    Plot: string,
    Poster: string,
  }

  interface ResponseElements {
    filmdata: filmElements,
  }

  
  function clearSearch() {
    setAfterSearch(false);

    if(inputvalue.current) {
      inputvalue.current.value = '';
      setFilmData(null);
    }
  }
  
  function FindLine() {
    return (
      <div className={styles.findModule}>
        <span>Type</span>
        <select name="FilmType" id="type" ref={filmType}>
          <option value="null">Default</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>

        <input type="text" placeholder='Название или IMDb ID' ref={inputvalue}/>
        <div className={styles.imgCase}>
          <img src={findImg} alt="" onClick={userResponse}/>
        </div>

        <div className={styles.imgCase}>
          <img src={closeImg} alt="" onClick={clearSearch}/>
        </div>
      </div>
    )
  }

  function userResponse() {
    const resp = inputvalue.current?.value.trim() // Т.к еще null надо учесть, добавил ?
    const type = filmType.current.value; // Тип фильма(movie, serial, episode)

    if (resp !== '') {
      setAfterSearch(true);
      // console.log(type);

      if (type === "null") {
        fetch(`http://www.omdbapi.com/?t=${resp}&apikey=97a5fe93`)
        .then(response => {return response.json()})
        .then((data) => {
          if (data.Response === "True") {
            setFilmData(data);
          } else {
            alert('Фильм не найден!')
            setFilmData(null);
          }
        })
      } else {
        fetch(`http://www.omdbapi.com/?t=${resp}&type=${type}&apikey=97a5fe93`)
          .then(response => {return response.json()})
          .then((data) => {
            if (data.Response === "True") {
              setFilmData(data);
            } else {
              alert('Фильм не найден!')
              setFilmData(null);
            }
          })
      }
    } else {
      alert("Пустой запрос!");
    }
  }

  function FilmList({filmdata}: ResponseElements) {
    const [short, setShort] = useState(true);

    return (
      <div className={styles.movieCard}>
      {short && (
        <>
          <div className='img'>
            <img src={filmData?.Poster} alt="" />
          </div>
          <div className={styles.info}>
            <h2>Название: {filmData?.Title}</h2>
            <h2>Год выпуска: {filmData?.Year}</h2>
            <h3>Описание: {filmData?.Plot}</h3>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button" onClick={() => {setShort(prev => !prev)}}>Подробнее</button>
            </div>
          </div>
        </>       
      )}

      {!short && (
        <>
        <div className='img'>
          <img src={filmData?.Poster} alt="" />
        </div>
        <div className={styles.info}>
          <h2>Название: {filmData?.Title}</h2>
          <h2>Год выпуска: {filmData?.Year}</h2>
          <h2>Тип видеопотока: {filmData?.Genre}</h2>
          <h2>Рейтинг: {filmData?.Rated}</h2>
          <h2>Режисер: {filmData?.Director}</h2>
          <h2>Актеры: {filmData?.Actors}</h2>
          <h2>Описание: {filmData?.Plot}</h2>
          <div className="d-grid gap-2">
          <button className="btn btn-warning" type="button" onClick={() => {setShort(prev => !prev)}}>Скрыть</button>
        </div>
      </div>
        </>
      )}
      </div>
    )
  }

  return (
    <div>   
      <FindLine />
      {afterSearch && filmData && (
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <h1 style={{textAlign: 'center'}}>Список фильмов</h1>
            <FilmList filmdata={filmData}/>
          </div>
        </div>
      )}
    </div>
  )
}