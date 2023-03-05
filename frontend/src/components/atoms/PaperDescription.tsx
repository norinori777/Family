import React from "react";

interface PaperDescriptionProps {
  description: string;
}

export const PaperDescription = (props: PaperDescriptionProps) => {
  return (
    <div className="text-white">
      <p>{props.description}</p>
    </div>
  );
};
