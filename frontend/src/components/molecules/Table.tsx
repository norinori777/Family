import { HeaderTitle } from "components/atoms/HeaderTitle";
import React from "react";

interface TableProps {
  titleHeader: string[];
  items: { [key in string]: string | boolean | number }[];
}

export const Table = (props: TableProps) => {
  return (
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
                {props.items.map((item) => {
                  return <Row titleHeader={props.titleHeader} item={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RowProps {
  titleHeader: string[];
  item: { [key in string]: string | boolean | number };
}

const Row = (props: RowProps) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      {props.titleHeader.map((element) => {
        return (
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {props.item[element]}
          </td>
        );
      })}
    </tr>
  );
};
