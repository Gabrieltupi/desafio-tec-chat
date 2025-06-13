import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MessageItem = ({ message }) => {
  const isUser = message.isUser;

  return (
    <Box display="flex" justifyContent={isUser ? 'flex-end' : 'flex-start'} my={1}>
      <Paper elevation={3} sx={{ p: 0.7, maxWidth: '60%', bgcolor: isUser ? '#1976d2' : '#e0e0e0', color: isUser ? '#fff' : '#000' }}>
        <Typography>{message.content}</Typography>
        <Typography
        variant="caption"
        color="text.secondary"
        
        sx={{ display: 'block', lineHeight:1.2,fontSize: '0.65rem', color:'#cfd8dc'}}
      >
        {message.createdAt ? new Date(message.createdAt).toLocaleString() : ''}
      </Typography>
      </Paper>
      
    </Box>
  );
};

export default MessageItem;