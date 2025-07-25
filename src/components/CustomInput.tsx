import { InputLabel, TextField } from "@mui/material";
import preeti from "preeti";
import { TextInputProps } from "../interfaces/ComponentInterface";
import { colors } from "../constants/constants";

export default function CustomInput({
  error,
  isNepali = false,
  value,
  label,
  fullWidth,
  ...restProps
}: TextInputProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: fullWidth ? "100%" : "max-content",
      }}
    >
      <InputLabel
        variant="standard"
        sx={{ color: colors.black, marginBottom: "2px" }}
        size="normal"
      >
        {label}
      </InputLabel>
      <TextField
        size="small"
        error={!!error}
        value={isNepali ? preeti(value) : value}
        {...restProps}
      />
    </div>
  );
}
