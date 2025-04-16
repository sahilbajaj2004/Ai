import React, { useContext, useState } from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
import Login from "./components/Login";

function App() {
  const { recognition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext);
  const [USER, setUser] = useState(null);

  return (
    <div className='main'>
      <div className="header">
        <Login onUserChange={setUser} />
      </div>
      <img src={va} alt="" id="galaxy" />
      <span>I'm Galaxy, Your Personal Chatbot</span>
      {!speaking ? (
        <button id='button' onClick={() => {
          setPrompt("listening...");
          setSpeaking(true);
          setResponse(false);
          recognition.start();
        }}>
          Ask <CiMicrophoneOn />
        </button>
      ) : (
        <div className='response'>
          {!response ? (
            <img src={speakimg} alt="" id="speak" />
          ) : (
            <img src={aigif} alt="" id="ai" />
          )}
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}

export default App;