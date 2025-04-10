import styles from './App.module.css'
import { Game } from './Components/MainGame/Game'

export default function App() {
  return (
    <>
    <div className={styles['win']}>
      <Game/>
    </div>
    </>
  )
}