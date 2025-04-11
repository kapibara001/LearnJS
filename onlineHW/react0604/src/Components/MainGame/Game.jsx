import styles from './Game.module.css'
import { useState, useEffect } from 'react'

export function Game() {
    const [startMenu, setStartMenu] = useState(true)
    const [timeLeft, setTimeLeft] = useState(10)
    const [isGame, setIsGame] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [fruitCount, setFruitCount] = useState(0)
    const [applePos, setApplePos] = useState({ x: 0, y: 0 })

    function startGame() {
        setStartMenu(false)
        setIsGame(true)
        spawnApple()
    }

    function spawnApple() {
        const x = Math.floor(Math.random() * 626)
        const y = Math.floor(Math.random() * 710)
        setApplePos({ x, y })
    }

    useEffect(() => {
        if (!isGame) return

        if (timeLeft <= 0) {
            setGameOver(true)
            setIsGame(false)
            return
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [isGame, timeLeft])

    function handleAppleClick() {
        setFruitCount(prev => prev + 1)
        spawnApple()
    }

    return (
        <div className={styles.windowGame}>
            {startMenu && (
                <div className={styles['SMenu']}>
                    <p>Привет! Чтобы начать игру, нажми на кнопку!</p>
                    <button onClick={startGame}>Начать игру</button>
                </div>
            )}

            {isGame && (
                <>
                    <div className={styles['timeGame']}>
                        <p>Время: {timeLeft}</p>
                        <p>Количество яблок: {fruitCount}</p>
                    </div>

                    <div className={styles['gamefield']}>
                        <div
                            className={styles['apple']}
                            style={{
                                marginTop: `${applePos.y}px`,
                                marginLeft: `${applePos.x}px`,
                                position: 'absolute',
                                cursor: 'pointer'
                            }}
                            onClick={handleAppleClick}
                        ></div>
                    </div>
                </>
            )}

            {gameOver && (
                <div className={styles['GameOver']}>
                    <p>Игра окончена! Ты собрал {fruitCount} яблок.</p>
                    <button onClick={() => window.location.reload()}>Сыграть ещё раз</button>
                </div>
            )}
        </div>
    )
}