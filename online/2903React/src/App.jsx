import { Clicker } from "./components/Clicker";
import { DropDown } from "./components/DropDown";
import { Form } from "./components/Form/Form";
import { Gallery } from "./components/Gallery";

import triggerIcon from './assets/react.svg'
import { ClickEffect } from "./components/ClickEffect/ClickEffect";
import { Timer } from "./components/Timer/Timer"
import { FetchApi } from "./components/Fetch/index"
import { ExampleUseRequest } from './components/MyHook/useMyHook'

export function App() { 
  return (
    <>
      <ExampleUseRequest/>
      {/* <FetchApi/> */}
      <Timer volume={3000}/>
      <ClickEffect/>
      <Clicker/>
      <DropDown 
        Trigger={
          <div 
            style={{
              backgroundColor: 'plum',
              padding: '5px 10px',
              boxSizing: 'border-box',
              border: '3px solid orange',
            }}
          >
            Триггер-DropDown 
            <img src={triggerIcon}/>
          </div>
        } 
      >
        {/** Этот элемент пробрасывается в children внуть DropDown */}
        <div
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: 'lightgray'
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              margin: '0 auto',
              backgroundColor: 'gray',
              borderRadius: '50%'
            }}
          />
        </div>
      </DropDown>
      <Form onSubmit={
        (data) => alert(JSON.stringify(data, undefined, 2)) 
      }/>
      <Gallery/>
    </>
  )
}