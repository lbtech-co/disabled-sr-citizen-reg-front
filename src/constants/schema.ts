import { object, string } from "yup";

export const STATES_SCHEMA = object({
  englishName: string().required("Required field"),
  nepaliName: string().required("Required field"),
});
