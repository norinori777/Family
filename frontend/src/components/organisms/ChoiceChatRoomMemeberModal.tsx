import React from 'react'
import { Modal } from '../../components/atoms/Modal'
import { ModalDescription } from '../../components/atoms/ModalDescription'
import { ModalHeader } from '../../components/atoms/ModalHeader'
import { Textbox } from '../../components/atoms/Textbox'
import { ListForOnChange } from '../../components/molecules/ListForOnChange'
import { CheckBox } from '../../components/atoms/CheckBox'
import { Button } from '../../components/atoms/Button'

interface ChoiceChatRoomMemeberModalProps {
  isDisplayed: boolean
  items: { label: string; name: string; value: string }[]
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal'
}

export const ChoiceChatRoomMemeberModal = (props: ChoiceChatRoomMemeberModalProps) => {
  return (
    <Modal isDisplayed={props.isDisplayed}>
      <div className="flex flex-col gap-2">
        <ModalHeader title={'ルームメンバー選択'} theme={props.theme} />
        <ModalDescription description={'ルームメンバーを選択してください。'} theme={'normal'} />
        <Textbox
          label={'フィルター'}
          value={''}
          placeholder={'メンバー候補のフィルター条件を入力してください。'}
          description={''}
          theme={props.theme}
          handleChange={() => {}}
        />
      </div>
      <ListForOnChange<{ label: string; name: string; value: string }>
        direction={'column'}
        items={props.items}
        children={CheckBox}
        onChange={() => {}}
      />

      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button type={'button'} label={'キャンセル'} theme={'normal'} action={() => {}} />
        <Button type={'button'} label={'選択'} theme={props.theme} action={() => {}} />
      </div>
    </Modal>
  )
}
