/**
 * useReducer - очередной хук из библеотеки React. 
 * 
 * Это альтернатива useState, но вместо вызова setState ты используешь функцию-диспетчер (dispatch), чтобы 
 * отправить действие (action) в редьюсер (reducer), который возвращает новое состояние.
 * 
 * Синтаксис: 
 *      const [state, dispatch] = useReducer(reducerFunction, initialState)
 * 
 *      state - текущее состояние
 *      dispatch - диспетчер 
 *      reducer(state, action) — функция, которая получает старое состояние и действие, и возвращает новое.
 * 
 * 
 */

import { useReducer } from "react";

// 1. Редьюсер-функция
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
  
export function CounterWithReducer() {
    // 2. Инициализация useReducer
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    return (
        <div>
            <h1>Счётчик: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>➕</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>➖</button>
            <button onClick={() => dispatch({ type: 'reset' })}>🔁</button>
        </div>
    );
}