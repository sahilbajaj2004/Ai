import React from 'react';

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

export default HistoryLog;