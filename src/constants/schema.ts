import { object, string } from "yup";

export const STATES_SCHEMA = object({
  englishName: string().required("Required field"),
  nepaliName: string().required("Required field"),
});

export const DISTRICT_SCHEMA = object({
  englishName: string().required("Required field"),
  nepaliName: string().required("Required field"),
  stateId: string().required("Required field"),
});

export const LOCAL_LEVEL_SCHEMA = object({
  englishName: string().required("Required field"),
  nepaliName: string().required("Required field"),
  stateId: string().required("Required field"),
});
