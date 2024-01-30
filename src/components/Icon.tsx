import { SvgIconProps } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import {
  Accessible,
  BlindOutlined,
  Dehaze,
  Diversity3,
  Elderly,
  ElderlyWoman,
  ListAlt,
  Man,
  Map,
  Woman,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface IconsComponentProps extends SvgIconProps {
  name: string;
}

export default function Icon({ name, ...rest }: IconsComponentProps) {
  switch (name) {
    case "Write":
      return <EditIcon {...rest} />;
    case "Delete":
      return <DeleteIcon {...rest} />;
    case "District":
      return <ListAlt {...rest} />;
    case "Left":
      return <ChevronLeftIcon {...rest} />;
    case "Bars":
      return <Dehaze {...rest} />;
    case "States":
      return <Map {...rest} />;
    case "Disabled":
      return <Accessible {...rest} />;
    case "Man":
      return <Man {...rest} />;
    case "Women":
      return <Woman {...rest} />;
    case "Senior":
      return <Elderly {...rest} />;
    case "Senior_Women":
      return <ElderlyWoman {...rest} />;
    case "Senior_Man":
      return <BlindOutlined {...rest} />;
    case "Third_Gender":
      return <Diversity3 {...rest} />;
    default:
      return <HomeIcon {...rest} />;
  }
}
