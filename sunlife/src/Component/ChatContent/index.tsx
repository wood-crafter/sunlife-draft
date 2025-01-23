import "./index.css";

type ChatMessage = {
  avatarUrl: string;
  content: string;
};

type ChatContentProps = {
  messages: ChatMessage[];
};

function ChatContent({ messages }: ChatContentProps) {
  return (
    <div className="assistant-chat">
      {messages.map((message, index) => (
        <div key={index} className="chart-line">
          <img
            className="avatar-sunlife"
            src={message.avatarUrl}
            alt="avatar"
          />
          <div className="chat-content">
            <p
              className="chart-content-line"
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          </div>
        </div>
      ))}

      <input
        className="chat-input"
        type="text"
        placeholder="Type your question here. Please avoid use of any sensitive or personal identifiable information."
      />
    </div>
  );
}

export default ChatContent;
