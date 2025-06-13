import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import HeaderMenu from './HeaderMenu';

jest.mock('./MessageHistoryDialog',() =>({ open, onClose, messages })=>(
  open ? <div data-testid="dialog">Dialog aberto com {messages.length} mensagens</div> : null
));

describe('HeaderMenu', () =>{
  it('renderiza o botão de menu', () => {
    render(<HeaderMenu fetchMessages={jest.fn()} />);
    const button = screen.getByRole('button', { name: /mais opções/i });
    expect(button).toBeInTheDocument();
  });

  it('abre o menu ao clicar no botão',() => {
    render(<HeaderMenu fetchMessages={jest.fn()} />);
    const button = screen.getByRole('button', { name: /mais opções/i });

    fireEvent.click(button);
    const menuItem = screen.getByText(/ver histórico de mensagens enviadas/i);
    expect(menuItem).toBeInTheDocument();
  });

  it('chama fetchMessages e abre o diálogo ao clicar no menu', async () => {
  const mockMessages = [
    {id: 1, content: 'Oi', isUser: true},
    {id: 2, content: 'Tudo bem?', isUser: false}
  ];
  const fetchMessages = jest.fn().mockResolvedValue(mockMessages);

  render(<HeaderMenu fetchMessages={fetchMessages} />);

  fireEvent.click(screen.getByRole('button', { name: /mais opções/i }));

  fireEvent.click(screen.getByText(/ver histórico de mensagens enviadas/i));

  await waitFor(() => expect(screen.getByTestId('dialog')).toBeInTheDocument());

  expect(screen.getByTestId('dialog')).toHaveTextContent('Dialog aberto com 2 mensagens');
});

});
