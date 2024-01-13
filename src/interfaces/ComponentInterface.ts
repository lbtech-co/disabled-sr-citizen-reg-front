import { SelectProps, TableProps } from "@mui/material";
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
  id?: string
  label: string
  className?: string
}

export interface TableHeaderProps {
  label: string
  id: string
  align?: "center" | "left" | "right" | "inherit" | "justify" | undefined
}

export interface SelectOptionInterface {
  label: string
  value: string | number
}

export interface CustomSelectProps extends SelectProps {
  options: SelectOptionInterface[]
}

export interface CustomTableProps extends TableProps {
  headers: {
    label: string
    id: string
    align?: "center" | "left" | "right" | "inherit" | "justify" | undefined
  }[]
  rows: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }[]
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdate?: (data: any) => void
  onDelete?: (id: string) => void
}
