import React from "react";
import { theme } from "../../util/theme/types";
import { Paper } from "../atoms/Paper";
import { PaperHeader } from "../atoms/PaperHeader";
import { PaperDescription } from "../atoms/PaperDescription";

interface SubContentProps {
  title: string;
  description: string;
  theme: theme;
}

export const SubContent = (props: SubContentProps) => {
  return (
    <Paper theme={props.theme}>
      <div className="p-2 flex flex-col">
        <PaperHeader title={props.title} />
        <div className="p-2">
          <PaperDescription description={props.description} />
        </div>
      </div>
    </Paper>
  );
};
