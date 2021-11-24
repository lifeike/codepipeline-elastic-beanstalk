import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [flowers, setFlowers] = useState({})

  useEffect(() => {
    axios.get("/flowers").then((res) => {
      setFlowers(res.data)
    })
  }, [])

  return (
    <div>
      <h1>{flowers.name}</h1>
      <h1>{flowers.name}</h1>
    </div>
  )
}

export default App
