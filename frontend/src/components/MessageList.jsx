import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        padding: 2,
      }}
    >
      {messages.map((msg, index) => (
        <MessageItem key={index} message={msg} />
      ))}
      <div ref={bottomRef} />
    </Box>
  );
};

export default MessageList;
