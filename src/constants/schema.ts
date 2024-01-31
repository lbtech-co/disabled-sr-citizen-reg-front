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
  districtId: string().required("Required field"),
  type: string().required("Required field"),
});

export const LOGIN_SCHEMA = object({
  userName: string().required("Required field"),
  password: string().required("Required field"),
});
