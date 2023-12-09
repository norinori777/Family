import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MainTitle, MainTitleProps } from './MainTitle'

const props: MainTitleProps = {
  title: 'タイトル',
  theme: 'primary',
}

describe('MainTitle', () => {
  test('タイトルの表示', () => {
    const { container } = render(<MainTitle {...props} />)
    const title = screen.getByRole('heading', { level: 1 })
    expect(container).toMatchSnapshot()
    expect(title).toHaveTextContent('タイトル')
  })
  test('primaryテーマの確認', () => {
    render(<MainTitle {...props} />)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveClass('text-primary-default')
  })
})
