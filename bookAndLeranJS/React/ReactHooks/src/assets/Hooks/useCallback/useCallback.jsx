/**
 * Один из самых необычных, при этом очень важных и полезных хуков - хук useCallback()
 * 
 * Данный колбэк вернет замемоизированный колбэк - грубо говоря - useMemo, но для функций, а не для переменных
 */

import { useCallback, useEffect, useState } from "react";
import { ItemsList } from "./itemsLeast";

export function UsCallback() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'yellow' : 'black'
    }

    const generateItemsFromAPI = () => useCallback(() =>{
        return new Array(count).fill('').map((_, i)=> `Элемент: ${i+1}`)
    }, [count])


    return (
        <>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button className="btn btn-success" onClick={() => {setCount(prev => prev + 1)}}>Добавить</button>
            <button className="btn btn-warning" onClick={() => {setColored(prev => !prev)}}>Изменить</button>

            <ItemsList getItems={generateItemsFromAPI} />
        </>
    )
}