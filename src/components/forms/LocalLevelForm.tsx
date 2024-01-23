import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";
import { BASE_URL, LOCAL_LEVEL_TYPES, colors } from "../../constants/constants";
import axios from "axios";
import { LOCAL_LEVEL_INITIAL_VALUES } from "../../constants/initialValues";
import { useFormik } from "formik";
import { LOCAL_LEVEL_SCHEMA } from "../../constants/schema";
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
  DistrictFormData,
  DistrictFormProps,
  StateData,
} from "../../interfaces/ComponentInterface";

export default function LocalLevelForm({
  selectedData,
  fetchData,
  statesData,
}: DistrictFormProps) {
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
        <div style={selectWrapper}>
          <InputLabel style={{ color: colors.black }}>
            Select Local Level Type
          </InputLabel>
          <Select
            size="small"
            variant="outlined"
            fullWidth
            value={values.type}
            onChange={(e) => setFieldValue("type", e.target.value)}
            error={touched?.stateId && Boolean(errors.stateId)}
            onBlur={handleBlur}
          >
            {LOCAL_LEVEL_TYPES?.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{touched?.stateId && errors.stateId}</FormHelperText>
        </div>
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
