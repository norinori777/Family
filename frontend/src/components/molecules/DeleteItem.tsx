import React, { useState } from 'react'
import { TextMessage } from '../../components/atoms/TextMessage'
import { XCircle } from '../../components/Icons/XCircle'
import { Icon } from '../../components/atoms/Icon'

interface DeleteItemProps {
  item: { label: string; name: string; value: string }
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
  action: () => void
}

export const DeleteItem = (props: DeleteItemProps) => {
    const [name, setName] = useState<string>(props.item.name)
    const [value, setValue] = useState<string>(props.item.value)

    const handleClick = () => {
        props.action()
    }
    return (
        <div className="flex flex-row gap-1">
            <TextMessage theme={'black'} text={props.item.label} size={'base'} />
            <Icon icon={XCircle} action={handleClick} theme={props.theme} />
        </div>
    )
}
