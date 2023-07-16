import React from "react";
import { MenuLinkItem } from "../../components/atoms/MenuLinkItem";

interface TableProps<T extends { [key in string]: string | boolean | number }> {
  titleHeader: string[];
  targetLink: string[];
  items: T[] | null;
  Row: React.ElementType;
}

export const DynamicTable = <T extends { [key in string]: string | boolean | number }>(
  props: TableProps<T>
) => {
  return (
    props.items === null ? <p>{"データがありません。"}</p> : 
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {props.titleHeader.map((title) => {
                    return (
                      <th scope="col" className="px-6 py-4">
                        {title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {props.items?.map((item) => {
                  return <props.Row titleHeader={props.titleHeader} targetLinks={props.targetLink} item={item} InCludeComponent={MenuLinkItem} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
