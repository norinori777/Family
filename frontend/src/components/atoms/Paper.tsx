import React from "react";
import { ReactNode } from "react";

interface PaperProps {
  children: ReactNode;
}

export const Paper = (props: PaperProps) => {
  return (
    <section className={"bg-white rounded shadow-lg h-full"}>
      {props.children}
    </section>
  );
};
