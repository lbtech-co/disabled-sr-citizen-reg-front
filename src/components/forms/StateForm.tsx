import { Button, Card, Typography } from "@mui/material";
import CustomInput from "../CustomInput";
import { useEffect } from "react";
import { BASE_URL, colors } from "../../constants/constants";
import axios from "axios";
import { STATES_INITIAL_VALUES } from "../../constants/initialValues";
import { useFormik } from "formik";
import { STATES_SCHEMA } from "../../constants/schema";
import {
  StateFormProps,
  StatesFormData,
} from "../../interfaces/ComponentInterface";
import {
  FormButtonStyle,
  FormStyle,
  WrapperStyle,
} from "../../constants/styles";
import { useTranslation } from "react-i18next";

export default function StateForm({ selectedData, fetchData }: StateFormProps) {
  const { t } = useTranslation();

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
    if (selectedData) {
      setValues(selectedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

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
          id="english-name"
          name="englishName"
          label={t("English name")}
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
          label={t("Nepali name")}
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
          sx={FormButtonStyle}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}
