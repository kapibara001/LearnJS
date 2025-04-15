/**
 * useMemo - очередной очень важный хук для понимания программирования на React. Он помогает оптимизировать наше приложение. 
 * Он помогает закэшировать, или, как принято говорить - замемоизировать результат функции. Применяется в каких-то тяжелых  вычислениях
 * 
 */

import { useEffect, useMemo, useState } from "react"

function complexComputed(num) {
    let i = 0;
    while (i < 10**9) { i++ }
    return num*2;
}

/** Логично, когда выполнение функции будет подвисать из-за вычислений(мы замедлили выполнение функции циклом), но не
 * логично, когда выполнение функции подвесает во время обычного изменения стиля. Происходит это у нас из-за того, что когда мы изменяем 
 * стиль, мы заново рендерим функцию, в которой опять происходят вычисления, поэтому этот момент нам надо опитимизировать. Тут нам на помощь
 * приходит хук useMemo.
 * 
 * У нас есть значение number, которое если не поменялось, не надо выполнять вычисления снова - можно закешировать(замемоизировать)
 * 
 * Синтаксис useMemo похож на синтаксис useEffect: 
 *  useMemo(() => {какая-то функция}, [зависимости])
 */  

export function UsMemo() {
    const [number, setNumber] = useState(42);
    
    const computed = useMemo(() => {
        return complexComputed(number)
    }, [number]);

    const [colored, setColored] = useState(false);
    const styleh1 = {
        color: colored ? '3px solid black' : null
    }

    return (
        <>
            <h1 style={{
                border: styleh1.color,
                width: 'max-content',
                borderRadius: '5px',
                padding: '10px'
            }}>
                Вычисляемое свойство: {computed}
            </h1>
            <button className="btn btn-success" onClick={() => {setNumber(prev => prev + 1)}}>Добавить</button>
            <button className="btn btn-danger" onClick={() => {setNumber(prev => prev - 1)}}>Убавить</button>

            <button className="btn btn-warning" onClick={() => {setColored(prev => !prev)}}>{colored*1} - Изменить</button>
        </>
    )
}