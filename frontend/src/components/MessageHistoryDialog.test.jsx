import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageHistoryDialog from './MessageHistoryDialog';

describe('MessageHistoryDialog', () => {
  it('exibe mensagem de vazio quando não há mensagens', () => {
    render(
      <MessageHistoryDialog open={true} onClose={jest.fn()} messages={[]} />
    );

    expect(
      screen.getByText(/nenhuma mensagem encontrada/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Histórico de Mensagens Enviadas/)
    ).toBeInTheDocument();
  });

  it('exibe a lista de mensagens quando fornecidas', () => {
    const messages = [
      {
        id: 1,
        content: 'Mensagem 1',
        createdAt: '2024-01-01T10:00:00Z',
      },
      {
        id: 2,
        content: 'Mensagem 2',
        createdAt: '2024-01-02T11:00:00Z',
      },
    ];

    render(
      <MessageHistoryDialog open={true} onClose={jest.fn()} messages={messages} />
    );

    expect(screen.getByText('Mensagem 1')).toBeInTheDocument();
    expect(screen.getByText('Mensagem 2')).toBeInTheDocument();

    const dateElements = screen.getAllByText((content) =>  /\d{2}\/\d{2}\/\d{4}/.test(content)
    
);
expect(dateElements.length).toBeGreaterThanOrEqual(1);

  });

  it('não renderiza nada se o diálogo estiver fechado', () => {
    const { queryByText } = render(
      <MessageHistoryDialog open={false} onClose={jest.fn()} messages={[]} />
    );

    expect(queryByText(/Histórico de Mensagens Enviadas/i)).toBeNull();
  });
});
