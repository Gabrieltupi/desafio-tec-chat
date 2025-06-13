import React, {useEffect, useState} from 'react';
import { Paper, Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import {getMessages, sendMessage } from '../services/api';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
  try {
    const { userMessage, botMessage } = await sendMessage(text);

    setMessages((prev) => [
      ...prev,
      userMessage,
      { content: botMessage, isUser: false }
    ]);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    setMessages((prev) => [
      ...prev,
      { content: 'Erro ao enviar mensagem.', isUser: false }
    ]);
  }
};

  return (
    <Paper sx={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', width: '100%', p: 2 }}>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </Paper>
  );
};

export default ChatWindow;
