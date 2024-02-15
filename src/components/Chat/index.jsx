import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { GrSend } from "react-icons/gr";

const ChatIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      e.target.elements.message.value = "";
      // Bu joyda savollar uchun javoblar qo'shilsin
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-1000">
      {expanded ? (
        <div className="bg-white border rounded shadow-md w-72">
          <div className="flex justify-between items-center bg-[#004269] text-white p-2 rounded-t">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button onClick={toggleChat} className="text-white">
              &ndash;
            </button>
          </div>
          <div className="overflow-y-auto max-h-40 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-1 rounded ${
                  message.sender === "user"
                    ? "bg-[#004269] text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center p-2">
            <input
              type="text"
              name="message"
              placeholder="Savolingizni yuboring..."
              className="flex-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-[#004269]"
            />
            <button
              type="submit"
              className="ml-2 bg-[#004269] text-white p-3 rounded-full focus:outline-none"
            >
              <GrSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#004269] text-white rounded-full w-16 h-16 flex justify-center items-center">
          <button onClick={toggleChat}>
            <LuMessagesSquare className="w-8 h-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
