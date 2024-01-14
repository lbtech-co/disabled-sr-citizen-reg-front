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
