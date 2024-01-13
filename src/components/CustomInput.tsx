import { InputLabel, TextField } from "@mui/material";
import preeti from "preeti";
import { ChangeEvent, useState } from "react";
import { TextInputProps } from "../interfaces/ComponentInterface";
import { colors } from "../utils/Constants";

export default function CustomInput({
  id,
  error,
  isNepali = false,
  value,
  onChange,
  label,
  fullWidth,
  ...restProps
}: TextInputProps) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const nepaliValue = preeti(e.target.value);
    setInputValue(nepaliValue);
    onChange?.(nepaliValue);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: fullWidth ? "100%" : "max-content",
      }}
    >
      <InputLabel variant="standard" sx={{ color: colors.black }} size="normal">
        {label}
      </InputLabel>
      {isNepali ? (
        <TextField
          id={id}
          size="small"
          error={!!error}
          value={value || inputValue}
          onChange={handleChange}
          {...restProps}
        />
      ) : (
        <TextField size="small" id={id} error={!!error} {...restProps} />
      )}
    </div>
  );
}
