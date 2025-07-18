import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";
import { BASE_URL, LOCAL_LEVEL_TYPES, colors } from "../../constants/constants";
import axios from "axios";
import { LOCAL_LEVEL_INITIAL_VALUES } from "../../constants/initialValues";
import { useFormik } from "formik";
import { LOCAL_LEVEL_SCHEMA } from "../../constants/schema";
import { useTranslation } from "react-i18next";
import {
  WrapperStyle,
  FormStyle,
  selectWrapper,
  FormButtonStyle,
} from "../../constants/styles";
import {
  Button,
  Card,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  LocalLevelFormData,
  LocalLevelFormProps,
  StateData,
} from "../../interfaces/ComponentInterface";

export default function LocalLevelForm({
  selectedData,
  fetchData,
  districtsData,
}: LocalLevelFormProps) {
  const { t } = useTranslation();
  const [districtData, setDistrictData] = useState<StateData[]>();
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
    initialValues: LOCAL_LEVEL_INITIAL_VALUES,
    validationSchema: LOCAL_LEVEL_SCHEMA,
    onSubmit: (formValues) => handleSubmitForm(formValues),
  });

  useEffect(() => {
    if (selectedData) {
      setValues(selectedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  useEffect(() => {
    if (districtsData) {
      setDistrictData(districtsData);
    }
  }, [districtsData]);

  const handleSubmitForm = async (formValues: LocalLevelFormData) => {
    const { englishName, nepaliName, districtId, id, type } = formValues;
    const basePayload = {
      english_name: englishName,
      nepali_name: nepaliName,
      district_id: districtId,
      type,
    };
    const payload = id ? { id, ...basePayload } : basePayload;

    try {
      const response = await axios.post(
        `${BASE_URL}/Local/CreateOrEdit`,
        payload,
      );

      if (response.status === 201) {
        fetchData();
        setValues(LOCAL_LEVEL_INITIAL_VALUES);
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
        {t("local_level_form_header")}
      </Typography>
      <form style={FormStyle} onSubmit={handleSubmit}>
        <div style={selectWrapper}>
          <InputLabel style={{ color: colors.black }}>
            {t("select_district")}
          </InputLabel>
          <Select
            size="small"
            variant="outlined"
            fullWidth
            value={values.districtId}
            onChange={(e) => setFieldValue("districtId", e.target.value)}
            error={touched?.districtId && Boolean(errors.districtId)}
            onBlur={handleBlur}
          >
            {districtData?.map((data) => (
              <MenuItem
                key={data.id}
                value={data.id}
              >{`${data.englishName} (${data.nepaliName})`}</MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {touched?.districtId && errors.districtId}
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
        <div style={selectWrapper}>
          <InputLabel style={{ color: colors.black }}>
            {t("select_local_level_type")}
          </InputLabel>
          <Select
            size="small"
            variant="outlined"
            fullWidth
            value={values.type}
            onChange={(e) => setFieldValue("type", e.target.value)}
            error={touched?.type && Boolean(errors.type)}
            onBlur={handleBlur}
          >
            {LOCAL_LEVEL_TYPES?.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {touched?.type && errors.type}
          </FormHelperText>
        </div>
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
