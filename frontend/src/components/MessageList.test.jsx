import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageList from './MessageList';

jest.mock('./MessageItem', () => ({ message }) => (
  <div data-testid="message-item">{message.content}</div>
));


describe('MessageList', () => {
  const mockMessages = [
    { id: 1, content: 'Olá!', isUser: true },
    { id: 2, content: 'Como posso ajudar?', isUser: false },
  ];

  it('renderiza todas as mensagens corretamente', () => {
    render(<MessageList messages={mockMessages} />);

    const items = screen.getAllByTestId('message-item');
    expect(items).toHaveLength(mockMessages.length);
    expect(items[0]).toHaveTextContent('Olá!');
    expect(items[1]).toHaveTextContent('Como posso ajudar?');
  });

  it('scrolla automaticamente para o fim ao receber novas mensagens', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const { rerender } = render(<MessageList messages={[]} />);
    rerender(<MessageList messages={mockMessages} />);

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});
