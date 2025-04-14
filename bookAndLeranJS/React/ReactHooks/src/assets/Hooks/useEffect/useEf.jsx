/**
 * useEffect применяется 
 * 
 * Типичный синтаксис useEffect: 
 *      useEffect(() => {код обновления компонента}, [от каких функций/компонентов зависит])
 * 
 * Если [] не указаны - обновляется при каждом рендеринге компонента
 * Если [] указаны, но в них пусто - обновится только 1 раз - при запуске компонента на стринице
 * Если внутри [] указаны определенные параметры, то компонент будет обновлятся каждый раз, когда будут 
 *  изменятся эти параметры(хотя бы 1) 
 */

import { useEffect, useState } from "react"

export function UsEf() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])

    // useEffect(() => {
    //     console.log('render')
    // })

    // https://jsonplaceholder.typicode.com/todos/1
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
            // console.log("Обновление")
    }, [type])

    useEffect(() => {
        alert("Привет! Вы только зашли на сайт!")
    }, []) // Компонент вызовется только 1 раз в начале работы


    return (
        <div>
            <h1>Resourse: {type}</h1>

            <button className="btn btn-outline-danger" onClick={() => {setType('users')}}>Пользователи</button>
            <button className="btn btn-outline-info" onClick={() => {setType('todos')}}>Todo</button>
            <button className="btn btn-outline-warning" onClick={() => {setType('posts')}}>Post</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}