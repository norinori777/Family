import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Headerコンポーネント', () => {
  test('子要素が正しくレンダリングされること', () => {
    const { getByText } = render(
      <Header>
        <div>テスト</div>
      </Header>
    )
    expect(getByText('テスト')).toBeInTheDocument()
  })

  test('子要素が指定されなかった場合にエラーが発生しないこと', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toBeInstanceOf(HTMLElement)
  })
})
