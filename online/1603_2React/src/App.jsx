import './App.css';

import { ButtonPageUp } from './assets/pageUp.jsx';


export function App() {
  return (
    <>
      <div className="grid-window-logo2">
        <div className="red">
          <ButtonPageUp/>
        </div>
        <div className="green">
          <ButtonPageUp/>
        </div>
        <div className="yellow"></div>
        <div className="purple"></div>
      </div>
    </>
  )
}