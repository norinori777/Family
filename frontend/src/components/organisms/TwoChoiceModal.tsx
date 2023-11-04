import React, { ReactNode } from 'react'

import { ModalHeader } from '../../components/atoms/ModalHeader'
import { Modal } from '../../components/atoms/Modal'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import { Button } from '../../components/atoms/Button'

interface TwoChoiceModalProps {
  isDisplayed: boolean
  title: string
  description: string
  content: ReactNode
  leftButton: string
  rightButton: string
  handleModal: () => void
  handleReGet: () => void
  leftButtonCallback: () => void
  rightButtonCallback: () => void
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal'
  descriptionTheme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal'
}

export const TwoChoiceModal = (props: TwoChoiceModalProps) => {
  const leftButtonCallback = () => {
    props.leftButtonCallback()
  }
  const rightButtonCallback = () => {
    props.rightButtonCallback()
  }

  return (
    <>
      <Modal isDisplayed={props.isDisplayed} zIndex={10}>
        <div className="flex flex-col gap-2">
          <ModalHeader title={props.title} theme={props.theme} />
          <ModalDescription description={props.description} theme={props.descriptionTheme} />
        </div>
        {props.content}
        <div className="flex flex-row gap-2 justify-center mt-4">
          <Button
            type={'button'}
            label={props.leftButton}
            theme={'normal'}
            action={leftButtonCallback}
          />
          <Button
            type={'button'}
            label={props.rightButton}
            theme={props.theme}
            action={rightButtonCallback}
          />
        </div>
      </Modal>
    </>
  )
}
