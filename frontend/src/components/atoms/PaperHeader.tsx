import React from "react";

interface PaperHeaderProps {
  title: string;
}

export const PaperHeader = (props: PaperHeaderProps) => {
  return (
    <div className=" text-xl text-white">
      <p>{props.title}</p>
    </div>
  );
};
