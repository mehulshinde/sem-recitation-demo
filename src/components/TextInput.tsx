import React from "react";
export interface TextInputProps {
  reference: React.MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  label?: string;
}
export const Header: React.FC<TextInputProps> = ({
  reference,
  placeHolder,
  label,
  onChange,
  ...props
}) => {
  return (
    <div>
      <input
        className="text-input"
        onChange={onChange}
        placeholder={placeHolder ? placeHolder : ""}
        ref={reference}
      ></input>
    </div>
  );
};
