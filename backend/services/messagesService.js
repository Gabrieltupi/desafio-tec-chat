const {Message} = require('../models')

exports.getAllMessages = async () => {
    try{
        return await Message.findAll({order: [['createdAt','ASC']]})
    } catch (error) {
    throw new Error('Erro ao buscar mensagens no banco');
  }
}

exports.saveMessage = async(content,isUser)=>{
    if(!content || content.trim() === ''){
        throw new Error('Você deve preencher o campo');
    }
    try {
     const userMessage =await Message.create({content,isUser});
     const botMessage = await exports.generateBotResponse();
    
     return{userMessage, botMessage} ;
    } catch(error){
    throw new Error('Erro ao salvar mensagem no banco');
  }
};

exports.generateBotResponse = async () => {
    return "Mensagem recebida! Processaremos ela e retornaremos, até logo!";
};