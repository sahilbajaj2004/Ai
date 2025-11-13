import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
import LoginPage from "./components/loginpage";
function App() {
  let { recognition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext)


  return (
    <div className='main'>
      <img src={va} alt="" id="galaxy" />
      <span>I'm Galaxy, Your Personal Chatbot</span>
      {!speaking ?
        <button id='button' onClick={() => {
          setPrompt("listening...")
          setSpeaking(true)
          setResponse(false)
          recognition.start()
        }}>Ask <CiMicrophoneOn /></button>
        :
        <div className='response'>
          {!response ?
            <img src={speakimg} alt="" id="speak" />
            :
            <img src={aigif} alt="" id="ai" />}
          <p>{prompt}</p>
        </div>

      }
      <LoginPage />



    </div>
  )
}

export default App
