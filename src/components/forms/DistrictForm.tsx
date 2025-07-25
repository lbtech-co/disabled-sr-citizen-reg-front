import {
  Button,
  Card,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";
import { BASE_URL, colors } from "../../constants/constants";
import axios from "axios";
import { DISTRICT_INITIAL_VALUES } from "../../constants/initialValues";
import {
  DistrictFormData,
  DistrictFormProps,
  StateData,
} from "../../interfaces/ComponentInterface";
import { useFormik } from "formik";
import { DISTRICT_SCHEMA } from "../../constants/schema";
import {
  WrapperStyle,
  FormStyle,
  selectWrapper,
  FormButtonStyle,
} from "../../constants/styles";
import { useTranslation } from "react-i18next";

export default function DistrictForm({
  selectedData,
  fetchData,
  statesData,
}: DistrictFormProps) {
  const { t } = useTranslation();
  const [stateData, setStateData] = useState<StateData[]>();
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
    if (selectedData) {
      setValues(selectedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  useEffect(() => {
    if (statesData) {
      setStateData(statesData);
    }
  }, [statesData]);

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
        fontSize="18px"
        bgcolor={colors.blue}
        color={colors.white}
        width="100%"
        height="55px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {t("district_form_header")}
      </Typography>
      <form style={FormStyle} onSubmit={handleSubmit}>
        <div style={selectWrapper}>
          <InputLabel style={{ color: colors.black }}>
            {t("select_state")}
          </InputLabel>
          <Select
            size="small"
            variant="outlined"
            fullWidth
            value={values.stateId}
            onChange={(e) => setFieldValue("stateId", e.target.value)}
            error={touched?.stateId && Boolean(errors.stateId)}
            onBlur={handleBlur}
          >
            {stateData?.map((data) => (
              <MenuItem
                key={data.id}
                value={data.id}
              >{`${data.englishName} (${data.nepaliName})`}</MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {touched?.stateId && errors.stateId}
          </FormHelperText>
        </div>
        <CustomInput
          fullWidth
          id="english-name"
          name="englishName"
          label={t("english_name")}
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
          label={t("nepali_name")}
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
          {t("submit")}
        </Button>
      </form>
    </Card>
  );
}
