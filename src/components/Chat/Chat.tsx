import {useState} from "react";
import {Send} from "lucide-react";
import {InfMessage} from "./types.ts";
import ChatMessage from "./ChatMessage";

export default function Chat() {
  const [messages, setMessages] = useState<InfMessage[]>([]);
  const [input, setInput] = useState<string>('');
  
  const handleSend = async () => {
    if (!input.trim()) return;
    
    // 사용자 메시지 추가
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    
    // 여기에 AI 응답 로직 추가
    // 예시 응답
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `You said: ${userMessage}`,
        isUser: false
      }]);
    }, 1000);
  };
  
  const handleKeyPress = (event : React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            text={msg.text}
            isUser={msg.isUser}
          />
        ))}
      </div>
      
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          className="flex-1 p-2 border rounded-lg resize-none"
          rows={1}
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}