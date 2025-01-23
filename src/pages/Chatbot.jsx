import React, { useState } from "react";
import styled from "styled-components";
import { SendRounded } from "@mui/icons-material";
import axios from "axios";
import { ChatBot } from "../api";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.chatBackground};
`;

const Message = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};

  & > div {
    background: ${({ isUser, theme }) => (isUser ? theme.primary : theme.secondary)};
    color: ${({ theme }) => theme.text_onPrimary};
    padding: 10px;
    border-radius: 8px;
    max-width: 70%;
    word-wrap: break-word;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_onPrimary};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  color: red;
`;

// Utility function to parse text with *** or ### for bold and underline
const parseMessageText = (text) => {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("https://server-xrg1.onrender.com/api/chatbot/interact", { prompt: input });
      const botMessage = { text: response.data.reply, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { text: "Sorry, something went wrong. Please try again.", isUser: false };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <ChatContainer>
      <ChatBox>
        {messages.map((msg, index) => (
         <Message key={index} isUser={msg.isUser}>
         <div>{parseMessageText(msg.text)}</div>
       </Message>
       
        ))}
      </ChatBox>
      <InputContainer>
        <TextInput
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SendButton onClick={sendMessage}>
          <SendRounded />
        </SendButton>
      </InputContainer>
      <Headline>
        <p>This chat bot functionality is in the testing phase! It can make mistakes.</p>
      </Headline>
    </ChatContainer>
  );
}

export default Chatbot;
