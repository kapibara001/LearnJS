import styles from './App.module.css'
import findImg from './assets/components/svgs/751463.png'
import closeImg from './assets/components/svgs/3742936.png'

export function FindLine() {
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