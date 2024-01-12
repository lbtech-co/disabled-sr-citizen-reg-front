import Container from "@mui/material/Container";
import StateForm from "../components/StateForm";
import StatesTable from "../components/StateTable";
import "../styles/crudUiStates.css";

export default function StatesCrud() {
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Container id="states-crud-container">
        <StatesTable />
        <StateForm />
      </Container>
    </div>
  );
}
