import "./App.css"
import { useState } from "react"

function App() {
  const [greeting, setGreeting] = useState("Greeting Message")
  const [inputValue, setInputValue] = useState("")

  return (
    <div className='App'>
      <div className='greeting-container'>
        {!greeting ? "กรุณาใส่ข้อความ" : greeting}
      </div>
      <div className='input-container'>
        <label htmlFor='greeting-message'>New Greeting Message</label>
        <input
          id='greeting-message'
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>

      <div className='buttons'>
        <button onClick={() => setGreeting(inputValue)}>Update text</button>
      </div>
    </div>
  )
}

export default App
