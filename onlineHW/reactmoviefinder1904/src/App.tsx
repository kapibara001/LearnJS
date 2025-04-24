import { useRef, useState } from 'react';
import styles from './App.module.css'
import findImg from './assets/components/svgs/751463.png'
import closeImg from './assets/components/svgs/3742936.png'


export default function App() {
  const inputvalue = useRef<HTMLInputElement>(null);
  const filmType = useRef<string>("");
  const isByOneWord = useRef<HTMLInputElement>(null);
  
  const [afterSearch, setAfterSearch] = useState(false);
  const [filmData, setFilmData] = useState<filmElements[] | null>([])


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
          <option value=" ">Default</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>

        <div className={styles['radioInput']}>
          <span>По слову</span>
          <input type="checkbox" name="Word" id="isOneWord" ref={isByOneWord}/>
        </div>

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

// t - по полному названию
// s - слово в названии

function userResponse() {
  const resp = inputvalue.current?.value.trim();
  const type = filmType.current.value;
  const isSearchByWord = isByOneWord.current?.checked;

  if (resp !== '') {
    const param = isSearchByWord ? `s=${resp}` : `t=${resp}`;
    const typeParam = type ? `type=${type}` : '';
    const finalUrl = `http://www.omdbapi.com/?apikey=97a5fe93&${param}&${typeParam}`;

    fetch(finalUrl)
      .then(res => res.json())
      .then((data) => {
        if (data.Response === "True") {
          if (isSearchByWord && data.Search) {
            // поиск по слову - массив
            const filmList = data.Search;
            
            Promise.all(
              filmList.map((film: any) => {
                return fetch(`https://www.omdbapi.com/?apikey=97a5fe93&i=${film.imdbID}&`)
                  .then(response => response.json());
              })).then(fullFilmInfoArray => {
                setFilmData(fullFilmInfoArray);
              })
          } else {
            // точное совпадение - один объект
            setFilmData([data]); 
          }
          setAfterSearch(true);
        } else {
          alert('Фильмы не найдены!');
          setFilmData(null);
        }
      });
  } else {
    alert("Пустой запрос!");
  }
}

  function FilmList({ filmdata }: { filmdata: filmElements[] }) {
    return (
      <>
        {filmdata.map((film, idx) => (
          <FilmCard key={idx} film={film} />
        ))}
      </>
    );
  }
  
  function FilmCard({ film }: { film: filmElements }) {
    const [short, setShort] = useState(true);
  
    return (
      <div className={styles.movieCard}>
        {short ? (
          <>
          
            <div className="img">
              <img src={film.Poster} alt="" />
            </div>
            <div className={styles.info}>
              <h2>Название: {film.Title}</h2>
              <h2>Год выпуска: {film.Year}</h2>
              <h3>Описание: {film.Plot}</h3>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={() => setShort(false)}>Подробнее</button>
              </div>
            </div>

          </>
        ) : (
          <>

            <div className="img">
              <img src={film.Poster} alt="" />
            </div>
            <div className={styles.info}>
              <h2>Название: {film.Title}</h2>
              <h2>Год выпуска: {film.Year}</h2>
              <h2>Тип видеопотока: {film.Genre}</h2>
              <h2>Рейтинг: {film.Rated}</h2>
              <h2>Режиссер: {film.Director}</h2>
              <h2>Актеры: {film.Actors}</h2>
              <h2>Описание: {film.Plot}</h2>
              <div className="d-grid gap-2">
                <button className="btn btn-warning" type="button" onClick={() => setShort(true)}>Скрыть</button>
              </div>
            </div>

          </>
        )}
      </div>
    );
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