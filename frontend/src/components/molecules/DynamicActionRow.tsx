import React from 'react'

interface DynamicActionRowProps<T extends { [key in string]: string | boolean | number }> {
  titleHeader: string[]
  targetLinks: string[]
  item: T
  action: () => void
  InCludeComponent: React.ElementType
}

export const DynamicActionRow = <T extends { [key in string]: string | boolean | number }>(
  props: DynamicActionRowProps<T>
) => {
  const actionHandle = () => {
    props.action()
  }
  return (
    <tr className="border-b dark:border-neutral-500">
      {props.titleHeader.map((element: string) => {
        return (
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {props.targetLinks.includes(element) ? (
              <props.InCludeComponent text={props.item[element]} action={actionHandle} />
            ) : (
              props.item[element]
            )}
          </td>
        )
      })}
    </tr>
  )
}
