import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import { colors } from "../utils/Constants";

export default function FormInput({ name, id, label, error, placeholder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <InputLabel variant="standard" sx={{ color: colors.black }} size="normal">
        {label}
      </InputLabel>
      <TextField
        helperText={error}
        size="small"
        placeholder={placeholder}
        name={name}
        id={id}
        error={!!error}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};
