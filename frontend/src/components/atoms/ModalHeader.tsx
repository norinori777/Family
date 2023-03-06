import React from "react";

interface ModalHeaderProps {
  title: string;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};
