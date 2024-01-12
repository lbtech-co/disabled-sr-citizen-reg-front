import { TextField } from "@mui/material";
import preeti from "preeti";
import { ChangeEvent, useState } from "react";
import { TextInputProps } from "../interfaces/ComponentInterface";

export default function NepaliInput({
  id,
  error,
  ...restProps
}: TextInputProps) {
  const [value, setValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const nepaliValue = preeti(e.target.value);
    setValue(nepaliValue);
  }

  return (
    <TextField
      id={id}
      error={!!error}
      value={value}
      onChange={handleChange}
      {...restProps}
    />
  );
}
