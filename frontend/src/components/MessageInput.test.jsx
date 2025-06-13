import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput', () => {

  it('envia a mensagem ao clicar no botão', () => {
    const mockOnSend = jest.fn();
    render(<MessageInput onSend={mockOnSend} />);

    const input = screen.getByPlaceholderText(/digite sua mensagem/i);
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Olá, mundo!' } });
    fireEvent.click(button);

    expect(mockOnSend).toHaveBeenCalledWith('Olá, mundo!');
    expect(input.value).toBe(''); // campo limpo após envio
  });

  it('não envia mensagem vazia', () => {
    const mockOnSend = jest.fn();
    render(<MessageInput onSend={mockOnSend} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnSend).not.toHaveBeenCalled();
  });

  it('envia a mensagem ao pressionar Enter', () => {
    const mockOnSend = jest.fn();
    render(<MessageInput onSend={mockOnSend} />);

    const input = screen.getByPlaceholderText(/digite sua mensagem/i);
    fireEvent.change(input, { target: { value: 'Testando enter' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockOnSend).toHaveBeenCalledWith('Testando enter');
  });
});
