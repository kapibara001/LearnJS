/**
 * Состояния(state) - одна из главных концепций react 
 * State позволяет хранить внутреннее состояние компонента. Внутри состояния 
 * содержатся важные характеристики  компонента.
 * 
 * Если характеристика не участвует в рендере компонента, её не нужно помещать 
 * внутрь состояния.
 * 
 * 
 * 
 * Что такое хук? 
 * Хуки — это набор полезных React функций, которые используются 
 * для решения разных проблем.
 * 
 * В функциональных компонентах:
 * useState - хук состояния.
 * 
 * Синтаксис useState():
 *      useState(начальное_значение_для_состояния)
 * 
 * Функция useState возвращает массив, содержащий на нулевом элементе ссылку на
 * значение состояния и функцию для обновления состояния в первом элементе.
 * 
 * Пример вызова useState с начальным значением 0:
 *  const [CounterValue, SetCounterVal] = useState
 * 
 * В переменную setCounterVal — записывается ссылка на функцию для задания нового 
 * значения переменной состояния. Обратите внимание, нам не нужно будет 
 * реализовывать тело функции для обновления этой переменной состояния. Это за 
 * нас сделает React. Нам нужно будет вызвать эту функцию указав имя setCounterVal 
 * и передать в качестве параметра новое значение для состояния.
 * 
 * Если вы хотите хранить в состоянии несколько значений, вам нужно вызвать 
 * useState по разу для каждого значения. Для каждого нового вызова useState, 
 * пара переменных слева от знака равенства должна быть другой.  
 * 
 * 
 */

import { useState } from "react"
import styles from './StateHook.module.css'

export function States(props) {
    let [count, setCount] = useState(props.start)
    return (
        <div>
            <button onClick={() => {setCount(count + props.step)}}>+{props.step}</button>
            <button onClick={() => {setCount(count = props.start)}}>Очистить</button>
            <p>Count: {count}</p>
        </div>
    )
}


/**
 * В Следующем примере я должен задать сразу 2 характеристики, и в итоге поменять
 * их по своей надобности: цвет и текст кнопки.
 * 
 * В обработчике кнопки мы вызываем для обновления каждой характеристики 
 * конкретную функцию.
 */
export function ChangeColor() {
    const [btnText, setBtnText] = useState('Before Clicked')
    const [notClickedColor, setNewColor] = useState('red');
    return (
        <div>
            <button className={styles['btn']}
                style={{backgroundColor: notClickedColor}} 
                onClick={() => {
                    setBtnText('You clicked!'),
                    setNewColor('green')
                }}
            >
                <b style={{color: 'white'}}>{btnText}</b>
            </button>
        </div>
    )
}

/** 
 * Главный вывод этого проекта: сколько характеристик состояния нужно хранить, 
 * столько раз и вызывается useState. 
 * 
 * 
 * Главные правила при работе с хуками:
 * 1.  Используйте хуки только на верхнем уровне. Это означает, что надо ставить 
 * хук в начале кода функционального компонента.
 * 
 * 2.  Не используйте хуки внутри циклов, условных операторов или  вложенных 
 * функций. Вместо этого всегда  используйте  хуки  только  на  верхнем  уровне  
 * React-функций.
 * 
 * 3.  Не вызывайте хуки из обычных функций JavaScript
*/


export function ChangeColorByClickToColor() {
    const [color, setColor] = useState('white');

    return (
        <div className={styles['main']}>
            <div style={{ display: 'flex' }}>
                <ColorBox colorText={'Red'}/>
                <ColorBox colorText={'Green'}/>
                <ColorBox colorText={'Blue'}/>
            </div>
            <div className={styles['ChangedBox']} style={{ backgroundColor: color}}>
                Some text
            </div>
        </div>
    )
}

function ColorBox({colorText}) {
    return (
        <div className={styles['box']} style={{ backgroundColor: colorText}}>
            <b>{colorText}</b>
        </div>
    )
}
