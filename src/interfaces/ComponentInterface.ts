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
  isNepali?: boolean
  name: string
  label: string
  className?: string
}

export interface TableHeaderProps {
  label: string
  id: string
  align?: "center" | "left" | "right" | "inherit" | "justify" | undefined
}

export interface StateData {
  englishName: string
  nepaliName: string
  id: string
}

export interface CustomTableProps {
  headers: {
    label: string
    id: string
    align?: "center" | "left" | "right" | "inherit" | "justify" | undefined
  }[]
  data: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }[]
  onUpdate?: (stateData: StateData | undefined) => void
  onDelete?: (id: string) => void
}
