import { TextField, TextFieldVariants } from "@mui/material";
import React from "react";
interface IInputTextFieldProps {
  label: string;
  variant: TextFieldVariants;
  fullWidth: boolean;
}
const InputTextField = ({
  label,
  variant,
  fullWidth,
}: IInputTextFieldProps) => {
  return (
    <div>
      <TextField label={label} variant={variant} fullWidth={fullWidth} />
    </div>
  );
};

export default InputTextField;
