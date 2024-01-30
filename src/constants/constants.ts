export const BASE_URL = "https://disability-api.lbtechnology.co/api";

export const colors = {
  red: "#B83955",
  blue: "#234A83",
  lightBlack: "#494953",
  white: "#F2F2F2",
  black: "#252725",
};

export const MENU_ITEMS = [
  { title: "home", path: "/", icon: "Home" },
  { title: "states", path: "/states", icon: "States" },
  { title: "districts", path: "/districts", icon: "District" },
  { title: "local_level", path: "/locallevel", icon: "District" },
];

export const LOCAL_LEVEL_TYPES = [
  { id: "vdc", title: "VDC" },
  { id: "municipality", title: "Municipality" },
  { id: "sub_metropolitan", title: "Sub Metropolitan" },
  { id: "metropolitan", title: "Metropolitan" },
];

export const DASHBOARD_CARD_ITEMS = [
  { title: "total_disabilities", totalCount: 1075, icon: "Disabled", id: "1" },
  { title: "male_disabilities", totalCount: 57, icon: "Man", id: "2" },
  { title: "female_disabilities", totalCount: 32, icon: "Women", id: "3" },
  {
    title: "third_gender_disabilities",
    totalCount: 5,
    icon: "Third_Gender",
    id: "4",
  },
  {
    title: "senior_citizen_disabilities",
    totalCount: 17,
    icon: "Senior",
    id: "5",
  },
  {
    title: "senior_male_disabilities",
    totalCount: 6,
    icon: "Senior_Man",
    id: "6",
  },
  {
    title: "senior_female_disabilities",
    totalCount: 5,
    icon: "Senior_Women",
    id: "7",
  },
  {
    title: "senior_third_gender_disabilities",
    totalCount: 6,
    icon: "Third_Gender",
    id: "8",
  },
];
