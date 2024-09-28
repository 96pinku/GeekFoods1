import { useState } from 'react'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import { Body } from './Component/Body/Body'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

export default App;
