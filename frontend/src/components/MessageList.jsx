import React from 'react';
import { Box } from '@mui/material';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => (
  <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
    {messages.map((msg, index) => (
      <MessageItem key={index} message={msg} />
    ))}
  </Box>
);

export default MessageList;