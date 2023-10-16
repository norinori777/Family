import React, { useState } from "react";
import {
  getFocusRingTheme,
  getLightBackGroundTheme,
  getFocusPlaceholderTheme,
  getFocusTextTheme,
  getTextTheme,
} from "../../util/theme/theme";
import { theme } from "../../util/theme/types";

interface InputBoxProps {
  placeholder: string;
  theme: theme;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = (props: InputBoxProps) => {
  const [inputFocus, setInputFocus] = useState(false);

  const textTheme =
    inputFocus == true ? getTextTheme(props.theme) : "text-gray-500";
  const focusTextTheme = getFocusTextTheme(props.theme);
  const focusRingTheme = getFocusRingTheme(props.theme);
  const backGroundTheme = getLightBackGroundTheme(props.theme);
  const focusPlaceholderTheme = getFocusPlaceholderTheme(props.theme);

  const onFocusHandle = () => {
    setInputFocus(true);
  };

  const onBlurHandle = () => {
    setInputFocus(false);
  };

  return (
    <div className="w-72">
      <input
        type="text"
        id="success"
        className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
        placeholder={props.placeholder}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  );
};
