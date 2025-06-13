import axios from 'axios';

const API_URL = 'https://desafio-tec-chat-backend.onrender.com'; 

export const getMessages = async () => {
  const res = await axios.get(`${API_URL}/messages/`);
  return res.data;
};

export const sendMessage = async (text) => {
  const res = await axios.post(`${API_URL}/messages/`, {
    content: text,
    isUser: true,
  });
  return res.data;
};
