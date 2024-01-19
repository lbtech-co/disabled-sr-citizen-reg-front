import { Button, Card, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { CSSProperties, useEffect } from "react";
import { BASE_URL, colors } from "../constants/constants";
import axios from "axios";
import { STATES_INITIAL_VALUES } from "../constants/initialValues";
import {
  StateFormProps,
  StatesFormData,
} from "../interfaces/ComponentInterface";
import { useFormik } from "formik";
import { STATES_SCHEMA } from "../constants/schema";

export default function StateForm({
  selectedState,
  fetchData,
}: StateFormProps) {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setTouched,
    setValues,
    isSubmitting,
  } = useFormik({
    initialValues: STATES_INITIAL_VALUES,
    validationSchema: STATES_SCHEMA,
    onSubmit: (formValues) => handleSubmitForm(formValues),
  });

  useEffect(() => {
    if (selectedState) {
      setValues(selectedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  const handleSubmitForm = async (formValues: StatesFormData) => {
    const { englishName, nepaliName, id } = formValues;
    const basePayload = { english_name: englishName, nepali_name: nepaliName };
    const payload = id ? { id, ...basePayload } : basePayload;

    try {
      const response = await axios.post(
        `${BASE_URL}/State/CreateOrEdit`,
        payload,
      );

      if (response.status === 201) {
        fetchData();
        setValues(STATES_INITIAL_VALUES);
        setTouched({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card sx={WrapperStyle}>
      <Typography
        variant="h5"
        bgcolor={colors.blue}
        color={colors.white}
        width="100%"
        height="55px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Create/Update States
      </Typography>
      <form style={FormStyle} onSubmit={handleSubmit}>
        <CustomInput
          fullWidth
          type="text"
          id="english-name"
          name="englishName"
          label="English name (अंग्रेजी नाम)"
          value={values.englishName}
          error={touched?.englishName && Boolean(errors.englishName)}
          helperText={touched?.englishName && errors.englishName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <CustomInput
          isNepali
          fullWidth
          id="nepali-name"
          name="nepaliName"
          label="Nepali name (नेपाली नाम)"
          value={values.nepaliName}
          error={touched?.nepaliName && Boolean(errors.nepaliName)}
          helperText={touched?.nepaliName && errors.nepaliName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          color="primary"
          sx={ButtonStyle}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

const WrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "40%",
  justifyContent: "space-between",
};
const ButtonStyle: CSSProperties = {
  width: "max-content",
  height: "45px",
  paddingInline: 10,
  marginInline: "auto",
};

const FormStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  gap: "40px",
  flex: 1,
  padding: "20px",
  boxSizing: "border-box",
};
