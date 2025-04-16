/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import { ref, push } from "firebase/database";
import database from "../firebaseConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import run from '../gemini';
// import HistoryLog from '../components/HistoryLog';

export const datacontext = createContext();

function UserContext({ children }) {
    let [speaking, setSpeaking] = useState(false);
    let [prompt, setPrompt] = useState('listening...');
    let [response, setResponse] = useState(false);
    let [history, setHistory] = useState([]);
    let [showHistory, setShowHistory] = useState(false);

    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = 'hi-GB';
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt) {
        let text = await run(prompt);
        let newText =
            text.split('**') &&
            text.split('*') &&
            text.replace('google', 'Team Junior') &&
            text.replace('Google', 'Team Junior');
        setPrompt(newText);
        speak(newText);
        setResponse(true);

        // Save chat to Firebase
        const chatRef = ref(database, "chats");
        push(chatRef, {
            user: prompt,
            ai: newText,
            timestamp: new Date().toISOString(),
        });

        setHistory((prevHistory) => [
            ...prevHistory,
            { user: prompt, ai: newText },
        ]);

        setTimeout(() => {
            setSpeaking(false);
        }, 6000);
    }
    function handleNewChat() {
        // Refresh the page to start a new chat
        window.location.reload();
    }
    let [chatOpen, setChatOpen] = useState(false);
    let [chatInput, setChatInput] = useState('');

    function handleChatSubmit(e) {
        e.preventDefault();
        if (chatInput.trim()) {
            aiResponse(chatInput);
            setChatInput('');
        }
    }


    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new speechRecognition();
    recognition.onresult = (e) => {
        let currentIndex = e.resultIndex;
        let transcript = e.results[currentIndex][0].transcript;
        setPrompt(transcript);
        takeCommand(transcript.toLowerCase());
    };

    function takeCommand(command) {
        if (command.includes('open') && command.includes('youtube')) {
            window.open('https://www.youtube.com/', '_blank');
            speak('opening Youtube');
            setResponse(true);
            setPrompt('opening Youtube...');
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        } else if (command.includes('open') && command.includes('google')) {
            window.open('https://www.google.com/', '_blank');
            speak('opening google');
            setResponse(true);
            setPrompt('opening google...');
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        } else if (command.includes('open') && command.includes('instagram')) {
            window.open('https://www.instagram.com/', '_blank');
            speak('opening instagram');
            setResponse(true);
            setPrompt('opening instagram...');
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        } else if (command.includes('time')) {
            let time = new Date().toLocaleString(undefined, {
                hour: 'numeric',
                minute: 'numeric',
            });
            speak(time);
            setResponse(true);
            setPrompt(time);
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        } else if (command.includes('date')) {
            let date = new Date().toLocaleString(undefined, {
                day: 'numeric',
                month: 'short',
            });
            speak(date);
            setResponse(true);
            setPrompt(date);
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        } else {
            aiResponse(command);
        }
    }
    function HistoryLog({ history, showHistory, toggleHistory }) {
        return (
            <>
                <button
                    onClick={toggleHistory}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '24px',
                    }}
                >
                    🕒
                </button>

                {showHistory && (
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '80px',
                            right: '20px',
                            width: '300px',
                            maxHeight: '400px',
                            overflowY: 'auto',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h4>History</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {history.map((entry, index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    <strong>User:</strong> {entry.user}
                                    <br />
                                    <strong>AI:</strong> {entry.ai}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
    let value = {
        recognition,
        speaking,
        setSpeaking,
        prompt,
        setPrompt,
        response,
        setResponse,
        history,
        showHistory,
        setShowHistory,
    };

    return (
        <div>
            <datacontext.Provider value={value}>
                {/* Plus Icon Button */}
                <button
                    onClick={handleNewChat}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} size="2x" color="white" />
                </button>
                {/* Message Button */}
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        background: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        color: 'black',
                        fontSize: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    💬
                </button>
                {/* Chat Modal */}
                {chatOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '80px',
                            left: '20px',
                            width: '300px',
                            background: 'white',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            padding: '10px',
                            zIndex: 1000,
                        }}
                    >
                        <div
                            style={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                                marginBottom: '10px',
                            }}
                        >
                            {history.map((entry, index) => (
                                <div key={index}>
                                    <p style={{ color: 'black' }}><strong>You:</strong> {entry.user}</p>
                                    <p style={{ color: 'black' }}><strong>AI:</strong> {entry.ai}</p>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleChatSubmit}>
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Type your message..."
                                style={{
                                    width: 'calc(100% - 50px)',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    marginRight: '5px',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: '#007bff',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                }}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                )}

                {children}
                <HistoryLog
                    history={history}
                    showHistory={showHistory}
                    toggleHistory={() => setShowHistory(!showHistory)}
                />
            </datacontext.Provider>
        </div>
    );
}

export default UserContext;