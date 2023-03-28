import React, { useState } from "react";
import {
  getFocusRingTheme,
  getFocusPlaceholderTheme,
  getFocusTextTheme,
  getTextTheme,
} from "../../util/theme/theme";
import { theme } from "../../util/theme/types";
import { FieldError } from "react-hook-form/dist/types";

interface TextboxProps {
  type: "text" | "password" | "submit";
  name: string;
  label: string;
  placeholder: string;
  description: string;
  theme: theme;
  field: any;
  error?: FieldError;
}

export const TextboxInHookForm = (props: TextboxProps) => {
  const [inputFocus, setInputFocus] = useState(false);

  const textTheme =
    inputFocus == true ? getTextTheme(props.theme) : "text-gray-500";
  const focusTextTheme = getFocusTextTheme(props.theme);
  const focusRingTheme = getFocusRingTheme(props.theme);
  const focusPlaceholderTheme = getFocusPlaceholderTheme(props.theme);

  const onFocusHandle = () => {
    console.log("Focus");
    setInputFocus(true);
  };

  const onBlurHandle = () => {
    console.log("blur");
    setInputFocus(false);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={props.name}
        className={`block mb-2 text-sm font-medium  ${textTheme}`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
        placeholder={props.placeholder}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        {...props.field}
      />
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description}</p>
      {props.error && <span>{"名前は必須です。"}</span>}
    </div>
  );
};
