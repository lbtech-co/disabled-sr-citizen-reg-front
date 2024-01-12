import { SvgIconProps } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
interface IconsComponentProps extends SvgIconProps {
  name: string
}

export default function Icon({ name, ...rest }: IconsComponentProps) {
  switch (name) {
    case "Write":
      return <EditIcon {...rest} />;
    case "Delete":
      return <DeleteIcon {...rest} />;
    default:
      return null;
  }
}
