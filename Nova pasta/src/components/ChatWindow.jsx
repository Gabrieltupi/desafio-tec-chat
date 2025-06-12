import React, { useEffect, useState } from 'react';
import { Paper, Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { getMessages, sendMessage } from '../services/api';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await getMessages();
    setMessages(res);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleSend = async (text) => {
    const userMsg = await sendMessage(text);
    setMessages((prev) => [...prev, userMsg, { content: 'Mensagem recebida com sucesso!', isUser: false }]);
  };

  return (
    <Paper sx={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </Paper>
  );
};

export default ChatWindow;
