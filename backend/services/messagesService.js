const {Message} = require('../models')

exports.getAllMessages = async () => {
    return await Message.findAll({order: [['createdAt','ASC']]})
}

exports.saveMessage = async(content,isUser)=>{
    const userMessage =await Message.create({content,isUser});
    const botMessage = await exports.generateBotResponse();
    return{userMessage, botMessage} ;
};

exports.generateBotResponse = async () => {
    return "Mensagem recebida! Processaremos ela e retornaremos, até logo!";
};