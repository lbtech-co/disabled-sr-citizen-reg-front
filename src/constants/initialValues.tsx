import {
  DistrictFormData,
  LocalLevelFormData,
  LoginFormValues,
  StatesFormData,
} from "../interfaces/ComponentInterface";

export const STATES_INITIAL_VALUES: StatesFormData = {
  nepaliName: "",
  englishName: "",
};

export const DISTRICT_INITIAL_VALUES: DistrictFormData = {
  nepaliName: "",
  englishName: "",
  stateId: "",
};

export const LOCAL_LEVEL_INITIAL_VALUES: LocalLevelFormData = {
  nepaliName: "",
  englishName: "",
  districtId: "",
  type: "",
};

export const LOGIN_INITIAL_VALUES: LoginFormValues = {
  userName: "",
  password: "",
};
