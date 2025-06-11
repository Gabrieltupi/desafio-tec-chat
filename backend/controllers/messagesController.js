const messagesService = require('../services/messagesService');

exports.listMessages= async (req,res) => {
    try{
        const messages = await messagesService.getAllMessages();
        res.status(200).json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Erro ao buscar mensagem'});
    }
};

exports.createMessage = async (req, res) => {
    try{
        const {content, isUser} = req.body;
        
        const result = await messagesService.saveMessage(content, isUser);
        res.status(201).json(result);
    } catch (err){
        console.error(err);
        res.status(500).json({error: 'Erro ao criar mensagem'});
    }
};