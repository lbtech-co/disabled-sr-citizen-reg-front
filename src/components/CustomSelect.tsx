import { InputLabel, MenuItem, Select } from "@mui/material";
import { colors } from "../utils/Constants";
import { CustomSelectProps } from "../interfaces/ComponentInterface";

export default function CustomSelect({
  label,
  fullWidth,
  options,
  ...restProps
}: CustomSelectProps) {
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
