import { Component } from "react"

export function App() {
  return (
    <h1>Hello World!</h1>
  )
}

export const OtherComponent = () => {
  return (
    <h2>Second Component</h2>
  )
}

export class ClassComponents extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h3>Классовый компонент</h3>
    )
  }
}