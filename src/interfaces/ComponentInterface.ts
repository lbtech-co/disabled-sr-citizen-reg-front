import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
} from "@mui/material/TextField";

export interface TextInputProps
  extends Omit<
    FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps,
    "variant"
  > {
  isNepali?: boolean;
  name: string;
  label: string;
  className?: string;
}

export interface TableHeaderProps {
  label: string;
  id: string;
  align?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
}

export interface StateData {
  englishName: string;
  nepaliName: string;
  id: string;
}

export interface DistrictData extends StateData {
  stateId: string;
}

export interface CustomTableProps {
  headers: {
    label: string;
    id: string;
    align?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
  }[];
  data: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdate?: (data: any) => void;
  onDelete?: (id: string) => void;
}

export interface StatesFormData {
  englishName: string;
  nepaliName: string;
  id?: string;
}

export interface DistrictFormData extends StatesFormData {
  stateId: string;
}

export interface LocalLevelFormData extends DistrictFormData {
  type:
    | "vdc"
    | "municipality"
    | "sub_metropolitan"
    | "metropolitan"
    | undefined;
}

export interface StateFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedData?: any;
  fetchData: () => void;
}

export interface DistrictFormProps extends StateFormProps {
  statesData: StateData[];
}
