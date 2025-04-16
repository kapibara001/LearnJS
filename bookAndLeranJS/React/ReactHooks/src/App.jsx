import './App.css'
import { StateFunc } from './assets/Hooks/useState/State'
import { UsEf } from './assets/Hooks/useEffect/useEf'
import { UseRef } from './assets/Hooks/useRef/useRef'
import { UsMemo } from './assets/Hooks/useMemo/useMemo'
import { Examples } from './assets/Hooks/allExamples/examples'
import { UsCallback } from './assets/Hooks/useCallback/useCallback'


// import { MouseLocation } from './assets/Hooks/useEffect/useEf'

export default function App() {
  return (
    <>
      {/* <StateFunc/> */}
      {/* <UsEf/> */}
      {/* <MouseLocation/> */}
      {/* <UseRef/> */}
      {/* <UsMemo/> */}
      <Examples/>
      {/* <UsCallback/> */}
    </>
  )
}