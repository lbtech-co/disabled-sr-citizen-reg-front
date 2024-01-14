import Table from "../components/Table";
import Stack from "@mui/material/Stack";
import { TableHeaderProps } from "../interfaces/ComponentInterface";
import { CSSProperties } from "react";

export default function StatesTable() {
  const headers: TableHeaderProps[] = [
    { label: "Name (नाम)", id: "name", align: "center" },
  ];

  const rows = [
    { name: "Koshi (कोशी)" },
    { name: "Madhesh (मधेश)" },
    { name: "Bagmati (बागमती)" },
    { name: "Gandaki (गण्डकी)" },
    { name: "Lumbini (लुम्बिनी)" },
    { name: "Karnali (कर्णाली)" },
    { name: "Sudurpaschim (सुदूरपश्चिम)" },
  ];

  return (
    <Stack sx={WrapperStyle}>
      <Table headers={headers} rows={rows} onUpdate={() => {}} />
    </Stack>
  );
}

const WrapperStyle: CSSProperties = { width: "60%", height: "max-content" };
