import { InputLabel, TextField } from "@mui/material";
import preeti from "preeti";
import { TextInputProps } from "../interfaces/ComponentInterface";
import { colors } from "../utils/Constants";

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
      <InputLabel variant="standard" sx={{ color: colors.black }} size="normal">
        {label}
      </InputLabel>
      {isNepali ? (
        <TextField error={!!error} value={preeti(value)} {...restProps} />
      ) : (
        <TextField error={!!error} value={value} {...restProps} />
      )}
    </div>
  );
}
