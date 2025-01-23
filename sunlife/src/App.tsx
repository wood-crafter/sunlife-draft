import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/logo-name.webp" alt="Logo" />
        <h2 className="title">Sunny (Advisor Assistant)</h2>
        <img
          className="logo"
          src="/logo-name.webp"
          alt="Logo"
          style={{ opacity: 0, marginRight: "15%", marginLeft: 0 }}
        />
      </div>
      <div className="assistant-chat-container">
        <div className="assistant-chat">
          <div className="chart-line">
            <img
              className="avatar-sunlife"
              src="/logo.webp"
              alt="avatar Sunlife"
            />
            <div className="chat-content">
              <p className="chart-content-line">
                Hi <strong>Rvsxmzrcx Vcllznbxvz</strong>. Welcome to Sunny
                (Advisor Assistant) Chatbox! Please let me know how I can help
                you.
              </p>
            </div>
          </div>

          <div className="chart-line">
            <img
              className="avatar-sunlife"
              src="/logo.webp"
              alt="avatar Sunlife"
            />
            <div className="chat-content">
              <p className="chart-content-line">
                To get the most accurate results, simply start your question
                with
                <br />
              </p>
              <p className="chart-content-line">
                '<strong>Product:</strong>' For the question relating to the
                Traditional and VUL product features and Rider, '<br />
              </p>
              <p className="chart-content-line">
                <strong>New Business Processing:</strong>' For the question
                relating to underwriting rules & requrements, '<br />
              </p>
              <p className="chart-content-line">
                <strong>Digital:</strong>' For question relating to Digital
                Solutions
              </p>
            </div>
          </div>

          <div className="chart-line">
            <img
              className="avatar-sunlife"
              src="/logo.webp"
              alt="avatar Sunlife"
            />
            <div className="chat-content">
              <p className="chart-content-line">
                Hi <strong>Rvsxmzrcx Vcllznbxvz</strong>. Welcome to Sunny
                (Advisor Assistant) Chatbox! Please let me know how I can help
                you.
              </p>
            </div>
          </div>

          <input
            className="chat-input"
            type="text"
            placeholder="Type your question here. Please avoid use of any sensitive or personal indentifiable information."
          />
        </div>
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
