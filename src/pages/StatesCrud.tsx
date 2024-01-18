import Container from "@mui/material/Container";
import StateForm from "../components/StateForm";
import { CSSProperties, useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import { StateData, TableHeaderProps } from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constant";

const STATE_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "Name (नाम)", align: "center" },
];

export default function StatesCrud() {
  const [selectedState, setSelectedState] = useState<StateData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [statesData, setStatesData] = useState<StateData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetch");

    try {
      const response = await axios.get(`${BASE_URL}/State/GetAllStates`);

      if (response.status === 200) {
        setStatesData(response.data?.states);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedData = statesData?.map((data: any) => ({
    englishName: data.english_name,
    nepaliName: data.nepali_name,
    id: data.id,
  }));

  function handleDialog(id: string) {
    setSelectedId(id);
    setIsDialogOpen(true);
  }

  async function handleDelete() {
    try {
      await axios.delete(`${BASE_URL}/State/DeleteState?id=${selectedId}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
    setIsDialogOpen(false);
  }

  return (
    <React.Fragment>
      <div style={WrapperStyle}>
        <Container id="states-crud-container">
          <div style={WrapperStyleTable}>
            <CustomTable
              headers={STATE_HEADERS}
              data={mappedData}
              onUpdate={(data) => setSelectedState(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <StateForm selectedState={selectedState} fetchData={fetchData} />
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
