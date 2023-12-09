import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TextMessage } from './TextMessage'

describe('TextMessage', () => {
  it('テキストの表示が正しいこと', () => {
    const text = 'Hello, World!'
    const { getByText } = render(<TextMessage text={text} theme="primary" size="base" />)
    expect(getByText(text)).toHaveTextContent('Hello, World!')
  })

  it('テーマクラスが正しくセットされていること', () => {
    const text = 'Hello, World!'
    const theme = 'success'
    render(<TextMessage text={text} theme={theme} size="base" />)
    const message = screen.getByText(text)
    expect(message).toHaveClass('text-success-default')
  })

  it('サイズクラスが正しくセットされていること', () => {
    const text = 'Hello, World!'
    const size = 'xl'
    render(<TextMessage text={text} theme="primary" size={size} />)
    const message = screen.getByText(text)
    expect(message).toHaveClass('text-xl')
  })

  it('アンダーラインのクラスがセットされていること', () => {
    const text = 'Hello, World!'
    const { container } = render(<TextMessage text={text} theme="primary" size="base" underline />)
    expect(container.firstChild).toHaveClass('underline')
  })
})
