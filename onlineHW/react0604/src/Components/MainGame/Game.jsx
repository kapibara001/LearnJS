import st from './Game.module.css'
import { useState, useEffect } from 'react'

export function Game() {
    const [startmenu, setStartMenu] = useState(true)
    const [gameField, setStartField] = useState(false)
    const [timer, setTimer] = useState(true)


    function StartGame() {
        setStartMenu(false)
        setStartField(true)
    }

    function GameEnd() {
        setStartMenu(true)
        setStartField(false)
    }

    function StartMenu() {
        if (startmenu) {
            return(
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className={st['SMenu']}>
                        <p style={{ textAlign: 'center'}}>
                            Привет! Нажми кнопку начать играть, чтобы приступить к игре!
                        </p>
                        <button onClick={() => StartGame()}>Начать игру</button>
                    </div>     
                </div>
            )
        }
    }

    function Timer() {
        const [seconds, setSeconds] = useState(3); // начальное время — 3
        const [isActive, setIsActive] = useState(true); // включён ли таймер
      
        useEffect(() => {
          let interval;
      
          if (isActive && seconds > 0) {
            interval = setInterval(() => {
              setSeconds(prev => prev - 1);
            }, 1000);
          }
      
          if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            setTimer(false);
          }
      
          return () => clearInterval(interval);
        }, [isActive, seconds]);
      
        return (
          <div className={st['preStart']}>
            <h1>{seconds}</h1>
          </div>
        );
      }

    function Game() {
        
    }

    return (
        <div className={st['windowGame']}>
            <StartMenu/>
            {gameField && (
                timer && (
                    <Timer/>
                )

            )}
        </div>
    )
}