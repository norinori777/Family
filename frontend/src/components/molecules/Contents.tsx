import React from "react";
import { Routes, Route } from "react-router-dom";

interface ContentsProps {
  /**
   * @var		mixed	content
   */
  contents: {
    link: string;
    key: string;
    component: React.ElementType }[];
}

export const Contents = (props: ContentsProps) => {
  return (
    <Routes>
      <Route key={"logout"} path={"/logout"} element={<p>TEST</p>} />
      {props.contents.map((content) => {
        return (
          <Route
            key={content.key}
            path={content.link}
            element={<content.component label={content.key} />}
          />
        );
      })}
      <Route path="*" element={<p>{"見つかりません。"}</p>} />
    </Routes>
  );
};
