import { InputLabel, TextField } from "@mui/material";
import preeti from "preeti";
import { CSSProperties, ChangeEvent, useState } from "react";
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

  const WrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: fullWidth ? "100%" : "max-content",
  };

  const LabelStyle: CSSProperties = { color: colors.black };

  return (
    <div style={WrapperStyle}>
      <InputLabel variant="standard" sx={LabelStyle} size="normal">
        {label}
      </InputLabel>
      {isNepali ? (
        <TextField
          id={id}
          error={!!error}
          value={value || inputValue}
          onChange={handleChange}
          {...restProps}
        />
      ) : (
        <TextField id={id} error={!!error} {...restProps} />
      )}
    </div>
  );
}
