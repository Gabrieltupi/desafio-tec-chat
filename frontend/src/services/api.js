import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

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
