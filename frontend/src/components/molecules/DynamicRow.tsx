import React from "react";

interface DynamicRowProps<T extends { [key in string]: string | boolean | number }> {
    titleHeader: string[];
    targetLinks: string[];
    item: T;
    InCludeComponent: React.ElementType;
  }

export const DynamicRow = <T extends { [key in string]: string | boolean | number}>(props: DynamicRowProps<T>) => {
    return (
      <tr className="border-b dark:border-neutral-500">
        {props.titleHeader.map((element:string) => {
          return (
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              {props.targetLinks.includes(element) ?
               <props.InCludeComponent text={props.item[element]} link={'/Chat/' + props.item['roomId']}  />  :
                 props.item[element]}
            </td>
          );
        })}
      </tr>
    );
  };