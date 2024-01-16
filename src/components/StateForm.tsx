import { Button, Card, Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { CSSProperties, FormEvent, useEffect, useState } from "react";
import { colors } from "../utils/Constants";
import { StateData } from "../interfaces/ComponentInterface";

interface FormData {
  englishName: string;
  nepaliName: string;
}

interface StateFormProps {
  selectedState?: StateData | undefined;
}

export default function StateForm({ selectedState }: StateFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nepaliName: "",
    englishName: "",
  });

  useEffect(() => {
    if (selectedState) {
      setFormData(selectedState);
    }
  }, [selectedState]);

  const handleInputChange = (name: keyof FormData, value: string) => {
    console.log("Before Update - FormData:", formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
          label="English name (अंग्रेजी नाम)"
          value={formData.englishName}
          onChange={(e) => handleInputChange("englishName", e.target.value)}
        />
        <CustomInput
          isNepali
          fullWidth
          id="nepali-name"
          name="nepaliName"
          label="Nepali name (नेपाली नाम)"
          value={formData.nepaliName}
          onChange={(e) => handleInputChange("nepaliName", e.target.value)}
        />
        <Button
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
