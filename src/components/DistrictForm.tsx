import {
  Button,
  Card,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CustomInput from "./CustomInput";
import { CSSProperties, useEffect } from "react";
import { BASE_URL, colors } from "../constants/constants";
import axios from "axios";
import { DISTRICT_INITIAL_VALUES } from "../constants/initialValues";
import {
  DistrictFormData,
  StateFormProps,
} from "../interfaces/ComponentInterface";
import { useFormik } from "formik";
import { DISTRICT_SCHEMA } from "../constants/schema";

export default function DistrictForm({
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
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: DISTRICT_INITIAL_VALUES,
    validationSchema: DISTRICT_SCHEMA,
    onSubmit: (formValues) => handleSubmitForm(formValues),
  });

  useEffect(() => {
    if (selectedState) {
      setValues(selectedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  const handleSubmitForm = async (formValues: DistrictFormData) => {
    const { englishName, nepaliName, stateId, id } = formValues;
    const basePayload = {
      english_name: englishName,
      nepali_name: nepaliName,
      state_id: stateId,
    };
    const payload = id ? { id, ...basePayload } : basePayload;

    try {
      const response = await axios.post(
        `${BASE_URL}/District/CreateOrEdit`,
        payload,
      );

      if (response.status === 201) {
        fetchData();
        setValues(DISTRICT_INITIAL_VALUES);
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
        Create/Update District
      </Typography>
      <form style={FormStyle} onSubmit={handleSubmit}>
        <div style={selectWrapper}>
          <InputLabel style={{ color: colors.black }}>Select State</InputLabel>
          <Select
            size="small"
            variant="outlined"
            fullWidth
            value={values.stateId}
            onChange={(e) => setFieldValue("state_id", e.target.value)}
            error={touched?.stateId && Boolean(errors.stateId)}
            onBlur={handleBlur}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>{touched?.stateId && errors.stateId}</FormHelperText>
        </div>
        <CustomInput
          fullWidth
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

const selectWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

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
