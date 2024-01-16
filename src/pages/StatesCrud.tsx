import Container from "@mui/material/Container";
import StateForm from "../components/StateForm";
import { CSSProperties, useState } from "react";
import CustomTable from "../components/CustomTable";
import { StateData, TableHeaderProps } from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";

const STATE_HEADERS: TableHeaderProps[] = [
  { label: "Name (नाम)", id: "name", align: "center" },
];

const STATES_DATA = [
  { englishName: "Koshi", nepaliName: "कोशी", id: "1" },
  { englishName: "Madhesh", nepaliName: "मधेश", id: "1" },
  { englishName: "Bagmati", nepaliName: "बागमती", id: "1" },
  { englishName: "Gandaki", nepaliName: "गण्डकी", id: "1" },
  { englishName: "Lumbini", nepaliName: "लुम्बिनी", id: "1" },
  { englishName: "Karnali", nepaliName: "कर्णाली", id: "1" },
  { englishName: "Sudurpaschim", nepaliName: "सुदूरपश्चिम", id: "1" },
];

export default function StatesCrud() {
  const [selectedState, setSelectedState] = useState<StateData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  function handleDialog(id: string) {
    setSelectedId(id);
    setIsDialogOpen(true);
  }

  function handleDelete() {
    setIsDialogOpen(false);
    console.log(selectedId);
  }

  return (
    <React.Fragment>
      <div style={WrapperStyle}>
        <Container id="states-crud-container">
          <div style={WrapperStyleTable}>
            <CustomTable
              headers={STATE_HEADERS}
              data={STATES_DATA}
              onUpdate={(data) => setSelectedState(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <StateForm selectedState={selectedState} />
        </Container>
      </div>
      <CustomDialog
        open={isDialogOpen}
        handleAgree={() => handleDelete()}
        handleClose={() => setIsDialogOpen(false)}
      />
    </React.Fragment>
  );
}
const WrapperStyle: CSSProperties = { minHeight: "100vh", display: "flex" };
const WrapperStyleTable: CSSProperties = {
  width: "60%",
  height: "max-content",
};
