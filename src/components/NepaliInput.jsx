import { TextField } from "@mui/material";
import preeti from "preeti";
import PropTypes from "prop-types";
import { useState } from "react";

export default function NepaliInput({ label, id, ...restProps }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const nepaliValue = preeti(e.target.value);
    setValue(nepaliValue);
  }

  return (
    <TextField
      label={label}
      id={id}
      {...restProps}
      value={value}
      onChange={handleChange}
    />
  );
}

NepaliInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
