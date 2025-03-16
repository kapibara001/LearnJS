import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, OtherComponent, ClassComponents }  from './App.jsx' // Если написано export function App -> надо тут прописывать { App }. Если экспорт задан видом export default App() - надо импортировать просто App


createRoot(document.getElementById('root')).render( // Создание вирутального DOM-дерева
  <StrictMode>
    <App />
    <OtherComponent />
    <ClassComponents />
  </StrictMode>,
)