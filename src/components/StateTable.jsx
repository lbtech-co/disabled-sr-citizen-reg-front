import Table from "../components/Table";
import Stack from "@mui/material/Stack";

export default function StatesTable() {
  const headers = [{ label: "Name (नाम)", id: "name", align: "center" }];

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
    <Stack sx={{ width: "60%", height: "max-content" }}>
      <Table headers={headers} rows={rows} onUpdate={() => {}} />
    </Stack>
  );
}
