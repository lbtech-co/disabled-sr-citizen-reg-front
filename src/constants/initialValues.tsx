import {
  DistrictFormData,
  LocalLevelFormData,
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
  stateId: "",
  type: undefined,
};
