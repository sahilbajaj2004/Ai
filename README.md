# MoodMate – Your Emotion-Aware AI Friend

**MoodMate** is a web-based, voice-enabled AI chatbot designed to support users emotionally by understanding their mental state through behavioral data. It mimics the behavior of a real-life friend by detecting mood shifts and responding through natural, friendly voice conversations.

## 🌟 Key Features

- **🎙️ Voice Interaction**  
  Powered by the Web Speech API and SpeechSynthesis API, MoodMate can listen and talk like a real companion—creating a human-like experience beyond text chat.

- **🧠 Mood Detection**  
  Detects emotional states such as sadness, stress, or happiness using behavioral cues like typing speed, inactivity, tone, and more. Built on ML models using datasets like AffectNet and DailyDialog.

- **🔔 Smart Notifications & Responses**  
  Sends empathetic prompts like:  
  > "Hey, you’ve been quiet. Wanna chat for a bit?"  
  > "I’m here if you feel like talking."

- **💬 AI-Powered Chat Engine**  
  Uses tools like Dialogflow, Rasa, and Google Gemini API to handle dialogue flow and emotional context naturally and intelligently.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – Responsive, dynamic UI  
- **Web Speech API** – Speech-to-Text  
- **SpeechSynthesis API** – Text-to-Speech  
- **Framer Motion** – Smooth animations

### Backend
- **Node.js + Express.js** – Server-side logic & APIs  
- **TensorFlow** – Machine learning model training & serving  
- **Firebase** – Real-time database & user data storage

### AI/ML Models
- **Emotion Detection**:  
  - Classification models (LSTM, XGBoost, Random Forest)  
  - Trained on datasets like AffectNet, Emotion Dataset, DailyDialog

- **NLP & Chat Engine**:  
  - BERT for contextual understanding  
  - Google Gemini API for realistic dialogue generation

---

## 🧩 How It Works

1. User interacts with MoodMate via voice or text.
2. MoodMate analyzes behavior and infers emotional state.
3. Based on mood, it initiates supportive, friendly conversations.
4. AI engine ensures natural flow, empathy, and context retention.

---

## 💡 Vision

MoodMate aims to humanize technology by bridging the gap between emotion and machine. Whether you're feeling low or just need someone to talk to, MoodMate is there—not just as a bot, but as a companion.

---

## 📌 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/moodmate.git
cd moodmate
# Run the app
npm run dev
