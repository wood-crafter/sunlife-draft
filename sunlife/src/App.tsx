import "./App.css";
import Header from "./Component/Header/index.tsx";
import ChatContent from "./Component/ChatContent/index.tsx";

function App() {
  const chatMessages = [
    {
      avatarUrl: "/logo.webp",
      content:
        "Hi <strong>Rvsxmzrcx Vcllznbxvz</strong>. Welcome to Sunny (Advisor Assistant) Chatbox! Please let me know how I can help you.",
    },
    {
      avatarUrl: "/logo.webp",
      content: `
        To get the most accurate results, simply start your question with:
        <br />
        '<strong>Product:</strong>' For the question relating to the Traditional and VUL product features and Rider,
        <br />
        '<strong>New Business Processing:</strong>' For the question relating to underwriting rules & requirements,
        <br />
        '<strong>Digital:</strong>' For question relating to Digital Solutions
      `,
    },
    {
      avatarUrl: "/logo.webp",
      content:
        "Hi <strong>Rvsxmzrcx Vcllznbxvz</strong>. Welcome to Sunny (Advisor Assistant) Chatbox! Please let me know how I can help you.",
    },
  ];
  return (
    <div className="app">
      <Header />
      <div className="assistant-chat-container">
        <ChatContent messages={chatMessages} />
      </div>

      <button className="logout-button">
        <img className="logout-icon" src="/i-icon.png" alt="icon" />
        Log Out
      </button>

      <button className="start-button">
        <span>
          <img src="arrow-right.svg" alt="arrow right" />
        </span>
      </button>
    </div>
  );
}

export default App;
