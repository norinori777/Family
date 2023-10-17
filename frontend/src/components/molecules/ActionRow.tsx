import React from 'react'

interface ActionRowProps<T extends { [key in string]: string | boolean | number }> {
  titleHeader: string[]
  item: T
  actionColumn: number
  actionElement: React.ElementType
}

export const ActionRow = <T extends { [key in string]: string | boolean | number }>(
  props: ActionRowProps<T>
) => {
  let count = 0
  return (
    <tr className="border-b dark:border-neutral-500">
      {props.titleHeader.map((element) => {
        count++
        return count === props.actionColumn ? (
          <>
            <td className="whitespace-nowrap px-6 py-4 font-medium">{props.item[element]}</td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              <props.actionElement item={props.item} />
            </td>
          </>
        ) : (
          <td className="whitespace-nowrap px-6 py-4 font-medium">{props.item[element]}</td>
        )
      })}
    </tr>
  )
}
