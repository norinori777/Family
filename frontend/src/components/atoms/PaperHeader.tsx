import React from "react";

interface PaperHeaderProps {
  title: string;
  theme: "primary" | "secondary" | "success" | "danger" | "warning" | "normal";
}

export const PaperHeader = (props: PaperHeaderProps) => {
  const baseStyle = "rounded-tr rounded-tl text-3xl text-white p-3 ";
  const themeStyle = "text-" + props.theme + "-default";
  return (
    <div className={baseStyle + themeStyle}>
      <p>{props.title}</p>
    </div>
  );
};
