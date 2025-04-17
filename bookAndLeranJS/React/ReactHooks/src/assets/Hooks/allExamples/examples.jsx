import { useReducer, useCallback, useEffect, useMemo, useState, useRef } from "react";

export function UseStateExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>useState</h1>
            <h1>Счетчик нажатий: {count}</h1>
            <button className="btn btn-success" onClick={() => {setCount(prev => prev + 1)}}>Добавить</button>
            <button className="btn btn-warning" onClick={() => {setCount(prev => prev - 1)}}>Вычесть</button>
        </div>
    )
}

export function UseState2Example() {
    const [styled, setStyled] = useState(false)

    const style = ({
        borderstyle: styled ? '3px solid black' : null
    })

    return (
        <>
        <div>
            <h1 style={{
                border: style.borderstyle
            }}>
                Заголовок для изменения
            </h1>
            <button className="btn btn-info" onClick={() => {setStyled(prev => !prev)}}>Изменить стиль</button>
        </div>
        <br />
        </>
        
    )
}


export function UseEffectExample() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            // console.log('render time')
        }, 1000);
    }, [time])

    return (
        <>
            <hr />
            <h1>useEffect</h1>
            <h1>
                Текущее время: {time}
            </h1>
        </>
    )
}

export function UseMemoExample() {
    const [num, setNum] = useState(42)

    function doubleNum(num) {
        let i = 0;
        // while (i < 10**10) {
        //     i++
        // }

        return num**2
    }

    const result = useMemo(() => {
        return doubleNum(num)
    }, [num])

    return (
        <>
            <hr />
            <h1>UseMemo</h1>
            <h1>Итог вычислений: {result}</h1>
            <button className="btn btn-success" onClick={() => {setNum(prev => prev + 1)}}>Добавить число</button>
        </>
    )
}

export function UseCallbackExample() {
    const [number, setNumber] = useState(1);

    // МЕМОИЗИРУЕМ getItems, чтобы он не пересоздавался при каждом ререндере
    const getItems = useCallback(() => {
        return new Array(number).fill('').map((_, i) => `Элемент ${i + 1}`);
    }, [number]);

    function ItemsList({ getItems }) {
        const [items, setItems] = useState([]);

        useEffect(() => {
            const newItems = getItems();
            setItems(newItems);
        }, [getItems]);

        return (
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <hr />
            <h1>useCallback</h1>
            <h2 style={{ width: 'max-content' }}>Созданный список:</h2>
            <ItemsList getItems={getItems} />
            <button
                className="btn btn-outline-primary"
                onClick={() => setNumber((prev) => prev + 1)}
            >
                Добавить
            </button>
        </div>
    );
}

export function UseReducerExample() {
    function counterReducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    return (
        <div>
            <hr />
            <h1>UseReducer</h1>
            <h1>Счётчик: {state.count}</h1>
            <button className="btn btn-success" onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className="btn btn-success" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className="btn btn-success" onClick={() => dispatch({ type: 'reset' })}>🔁</button>
        </div>
    );
}

export function UseRefExample() {
    const inputLiginField = useRef(null);

    function focusOnLogin() {
        inputLiginField.current.focus();
        // alert('Введите логин!')
    }

    return (
        <>
            <input type="text" placeholder="Введите логин" ref={inputLiginField}/>
            <button onClick={focusOnLogin}>Ввести логин</button>
        </>
    )
}