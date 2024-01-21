import {
  DistrictFormData,
  StatesFormData,
} from "../interfaces/ComponentInterface";

export const STATES_INITIAL_VALUES: StatesFormData = {
  nepaliName: "",
  englishName: "",
};

export const DISTRICT_INITIAL_VALUES: DistrictFormData = {
  nepaliName: "",
  englishName: "",
  state_id: null,
};
