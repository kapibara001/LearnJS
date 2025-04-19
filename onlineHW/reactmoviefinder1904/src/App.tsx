import { useRef, useState } from 'react';
import styles from './App.module.css'
import findImg from './assets/components/svgs/751463.png'
import closeImg from './assets/components/svgs/3742936.png'


export default function App() {
  const inputvalue = useRef('');
  const [afterSearch, setAfterSearch] = useState(false);
  
  function FindLine() {
    return (
      <div className={styles.findModule}>
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

  function clearSearch() {
    setAfterSearch(false);
    inputvalue.current.value = '';
  }
  
  function userResponse() {
    const resp = inputvalue.current.value.trim()
    if (resp !== '') {
      setAfterSearch(true);
      console.log('Поиск...');
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=97a5fe93')
        .then(response => {return response.json()})
        .then(data => {
          // console.log(data); // Данные о фильме
          // console.log(inputvalue.current.value) // Значение из строки
        })
    } else {
      alert('Пустой запрос');
    }
  }

  return (
    <div>   
      <FindLine />
      {afterSearch && (
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <h1 style={{textAlign: 'center'}}>Список фильмов</h1>
            {inputvalue.current.value}
            {/* Список фильмов на основе какой-то функции */}
          </div>
        </div>
      )}
    </div>
  )
}