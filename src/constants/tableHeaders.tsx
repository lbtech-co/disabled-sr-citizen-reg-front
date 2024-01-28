import { TableHeaderProps } from "../interfaces/ComponentInterface";

export const LOCAL_LEVEL_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "name", align: "center" },
  { id: "districtName", label: "district", align: "center" },
  { id: "type", label: "type", align: "center" },
];

export const DISTRICT_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "name", align: "center" },
  { id: "stateName", label: "state", align: "center" },
];

export const STATE_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "name", align: "center" },
];
