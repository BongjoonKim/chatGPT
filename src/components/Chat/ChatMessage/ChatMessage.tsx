import {InfMessage} from "../types.ts";

export default function ChatMessage ({ text, isUser } : InfMessage) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3/4 rounded-lg p-3 ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}>
        {text}
      </div>
    </div>
  );
}