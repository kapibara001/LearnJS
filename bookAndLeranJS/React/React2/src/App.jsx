import { Destruct } from "./assets/components/Destructor(THEORY)/Destruct"
import { Author } from "./assets/components/Author/Author"
import { Defaults } from "./assets/components/DefaultValuesProps/Defaults"
import { States, ChangeColor } from "./assets/components/StateHook/Hooks"
import { ChangeColorByClickToColor } from "./assets/components/StateHook/Hooks"

export function App() {
  return (
    <>
      <Destruct/>
      <Author 
        name={'Ivan'} 
        lastname={'Krilov'} 
        discription={'The best of the best in writes'}
        year={1956}
      />
      <Defaults name={'William'} lastName={"Shakspeare"}/>
      <States step={5} start={6}/>
      <ChangeColor/>
      <ChangeColorByClickToColor/>
    </> 
  )
}