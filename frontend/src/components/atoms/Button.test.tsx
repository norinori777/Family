import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { Button, ButtonProps } from './Button'

describe('Buttonコンポーネント', () => {
  const mockAction = jest.fn()
  const props: ButtonProps = {
    label: 'ボタン',
    theme: 'primary',
    type: 'button',
    action: mockAction,
  }

  it('propsが正しく渡されること', () => {
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    expect(button).toHaveTextContent(props.label)
    expect(button).toHaveAttribute('type', props.type)
  })

  it('クリック時にactionが呼び出されること', () => {
    const { getByRole } = render(<Button {...props} />)
    fireEvent.click(getByRole('button'))
    expect(mockAction).toHaveBeenCalled()
  })

  it('「真の値」の検証', () => {
    expect(1).toBeTruthy()
    expect('1').toBeTruthy()
    expect(true).toBeTruthy()
    //  expect(0).toBeTruthy(); // これはエラーになる
    //expect("").toBeTruthy();  // これはエラーになる
    // expect(false).toBeTruthy(); // これはエラーになる
  })
  it('「偽の値」の検証', () => {
    //expect(1).toBeFalsy();    // これはエラーになる
    //expect("1").toBeFalsy();  // これはエラーになる
    //expect(true).toBeFalsy(); // これはエラーになる
    expect(0).toBeFalsy()
    expect('').toBeFalsy()
    expect(false).toBeFalsy()
  })

  it('「null,undefined」の検証', () => {
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect(null).toBeFalsy()
    //expect(undefined).toBeFalsey(); // これはエラーになる
    expect(undefined).not.toBeDefined()
  })
})
