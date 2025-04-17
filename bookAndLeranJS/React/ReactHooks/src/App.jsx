import './App.css'
import { StateFunc } from './assets/Hooks/useState/State'
import { UsEf } from './assets/Hooks/useEffect/useEf'
import { UseRef } from './assets/Hooks/useRef/useRef'
import { UsMemo } from './assets/Hooks/useMemo/useMemo'
import { UseRefExample, UseReducerExample, UseCallbackExample, UseEffectExample, UseMemoExample, UseState2Example, UseStateExample } from './assets/Hooks/allExamples/examples'
import { UsCallback } from './assets/Hooks/useCallback/useCallback'
import { CounterWithReducer } from './assets/Hooks/useReducer/usereducer'
// import { MouseLocation } from './assets/Hooks/useEffect/useEf'

export default function App() {
  return (
    <>
      {/* <StateFunc/> */}
      {/* <UsEf/> */}
      {/* <MouseLocation/> */}
      {/* <UseRef/> */}
      {/* <UsMemo/> */}
      {/* <UsCallback/> */}
      {/* <CounterWithReducer/> */}

      <UseStateExample />
      <UseState2Example />
      <UseEffectExample />
      <UseMemoExample />
      <UseCallbackExample />
      <UseReducerExample />
      <UseRefExample />
    </>
  )
}