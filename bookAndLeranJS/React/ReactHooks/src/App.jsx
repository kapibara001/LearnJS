import './App.css'
import { StateFunc } from './assets/Hooks/useState/State'
import { UsEf } from './assets/Hooks/useEffect/useEf'
import { UseRef } from './assets/Hooks/useRef/useRef'
import { UsMemo } from './assets/Hooks/useMemo/useMemo'
import { UsCallback } from './assets/Hooks/useCallback/useCallback'
import { CounterWithReducer } from './assets/Hooks/useReducer/usereducer'

export default function App() {
  return (
    <>
      <StateFunc/>
      <UsEf/>
      <UseRef/>
      <UsMemo/>
      <UsCallback/>
      <CounterWithReducer/>
    </>
  )
}