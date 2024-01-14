import Container from "@mui/material/Container";
import StateForm from "../components/StateForm";
import StatesTable from "../components/StateTable";
import "../styles/crudUiStates.css";
import { CSSProperties } from "react";

export default function StatesCrud() {
  return (
    <div style={WrapperStyle}>
      <Container id="states-crud-container">
        <StatesTable />
        <StateForm />
      </Container>
    </div>
  );
}

const WrapperStyle: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
};
