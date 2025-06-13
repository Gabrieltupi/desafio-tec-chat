const messageService = require('../services/messagesService'); 
const { Message } = require('../models');

jest.mock('../models', () => ({
  Message: {
    findAll: jest.fn(),
    create: jest.fn(),
  },
}));

describe('messageService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllMessages', () => {
    it('retorna mensagens ordenadas por createdAt', async () => {
      const fakeMessages = [{ id: 1, content: 'Oi' }];
      Message.findAll.mockResolvedValue(fakeMessages);

      const result = await messageService.getAllMessages();
      expect(Message.findAll).toHaveBeenCalledWith({ order: [['createdAt', 'ASC']] });
      expect(result).toEqual(fakeMessages);
    });

    it('lança erro se falhar no banco', async () => {
      Message.findAll.mockRejectedValue(new Error('DB error'));

      await expect(messageService.getAllMessages()).rejects.toThrow('Erro ao buscar mensagens no banco');
    });
  });

  describe('saveMessage', () => {
    it('salva mensagem e gera resposta do bot', async () => {
      const mockContent = 'Olá';
      const mockIsUser = true;
      const fakeUserMessage = { id: 1, content: mockContent, isUser: true };

      Message.create.mockResolvedValueOnce(fakeUserMessage); // user msg
      const result = await messageService.saveMessage(mockContent, mockIsUser);

      expect(Message.create).toHaveBeenCalledWith({ content: mockContent, isUser: mockIsUser });
      expect(result.userMessage).toEqual(fakeUserMessage);
      expect(result.botMessage).toBe('Mensagem recebida! Processaremos ela e retornaremos, até logo!');
    });

    it('lança erro se conteúdo estiver vazio', async () => {
      await expect(messageService.saveMessage('', true)).rejects.toThrow('Você deve preencher o campo');
    });

    it('lança erro se falhar ao salvar no banco', async () => {
      Message.create.mockRejectedValue(new Error('Falha'));
      await expect(messageService.saveMessage('Oi', true)).rejects.toThrow('Erro ao salvar mensagem no banco');
    });
  });
});
