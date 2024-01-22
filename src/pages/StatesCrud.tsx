import StateForm from "../components/forms/StateForm";
import { useContext, useState } from "react";
import CustomTable from "../components/CustomTable";
import { StateData, TableHeaderProps } from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { AppContext } from "../utils/Context";

const STATE_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "Name (नाम)", align: "center" },
];

export default function StatesCrud() {
  const { statesData, fetchStatesData } = useContext(AppContext);
  const [selectedState, setSelectedState] = useState<StateData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedData = statesData.map((data: any) => ({
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
      fetchStatesData();
    } catch (err) {
      console.log(err);
    }
    setIsDialogOpen(false);
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div id="states-crud-container">
          <div id="states-crud-table">
            <CustomTable
              headers={STATE_HEADERS}
              data={mappedData}
              onUpdate={(data) => setSelectedState(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <StateForm selectedData={selectedState} fetchData={fetchStatesData} />
        </div>
      </div>
      <CustomDialog
        open={isDialogOpen}
        handleAgree={() => handleDelete()}
        handleClose={() => setIsDialogOpen(false)}
      />
    </React.Fragment>
  );
}
