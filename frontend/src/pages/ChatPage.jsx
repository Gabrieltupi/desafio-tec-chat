import React from 'react';
import ChatWindow from '../components/ChatWindow';
import Header from '../components/Header';
import { Container } from '@mui/material';

const ChatPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ px: 2 }}>
        <ChatWindow />
      </Container>
    </>
  );
};

export default ChatPage;
