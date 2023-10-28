import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LinkItem } from './LinkItem'

describe('LinkItem', () => {
  it('renders link text', () => {
    const props = {
      text: 'Link Text',
      link: '/link',
      select: jest.fn(),
      underline: false,
    }
    const { getByText } = render(
      <MemoryRouter>
        <LinkItem {...props} />
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
    }
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkItem {...props} />
      </MemoryRouter>
    )
    const linkItem = getByTestId('linkItem')
    fireEvent.click(linkItem)
    expect(props.select).toHaveBeenCalledWith(props.text)
  })
})
