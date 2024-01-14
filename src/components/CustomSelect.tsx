import { InputLabel, MenuItem, Select } from "@mui/material";
import { colors } from "../utils/Constants";
import { CustomSelectProps } from "../interfaces/ComponentInterface";
import { CSSProperties } from "react";

export default function CustomSelect({
  label,
  fullWidth,
  options,
  ...restProps
}: CustomSelectProps) {
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
      <Select fullWidth {...restProps} size="small">
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
