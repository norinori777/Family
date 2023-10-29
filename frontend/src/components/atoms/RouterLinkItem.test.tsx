import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RouterLinkItem } from './RouterLinkItem'

describe('LinkItem', () => {
  it('renders link text', () => {
    const props = {
      text: 'Link Text',
      link: '/link',
      select: jest.fn(),
      underline: false,
      theme: 'primary' as
        | 'primary'
        | 'secondary'
        | 'danger'
        | 'success'
        | 'warning'
        | 'normal'
        | 'white'
        | 'black',
      size: 'base' as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
    }
    const { getByText } = render(
      <MemoryRouter>
        <RouterLinkItem {...props} />
      </MemoryRouter>
    )
    expect(getByText(props.text)).toBeInTheDocument()
  })

  it('calls select function on click', () => {
    const props = {
      text: 'Link Text',
      link: '/link',
      select: jest.fn(),
      underline: false,
      theme: 'primary' as
        | 'primary'
        | 'secondary'
        | 'danger'
        | 'success'
        | 'warning'
        | 'normal'
        | 'white'
        | 'black',
      size: 'base' as 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
    }
    const { getByTestId } = render(
      <MemoryRouter>
        <RouterLinkItem {...props} />
      </MemoryRouter>
    )
    const linkItem = getByTestId('linkItem')
    fireEvent.click(linkItem)
    expect(props.select).toHaveBeenCalledWith(props.text)
  })
})
