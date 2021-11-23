import logo from "./logo.svg"
import { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [flowers, setFlowers] = useState()

  axios.get("http://localhost:8080/flowers").then((res) => {
    setFlowers(res.data)
  })

  return <h1>{flowers}</h1>
}

export default App
