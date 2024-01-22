import { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import {
  DistrictData,
  StateData,
  TableHeaderProps,
} from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import DistrictForm from "../components/forms/DistrictForm";

const STATE_HEADERS: TableHeaderProps[] = [
  { id: "name", label: "Name (नाम)", align: "center" },
];

export default function DistrictCrud() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [districtData, setDistrictData] = useState<DistrictData[]>([]);
  const [statesData, setStatesData] = useState<StateData[]>([]);

  useEffect(() => {
    if (statesData) {
      fetchData();
    }
  }, [statesData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/District/GetAllDistricts`);

      if (response.status === 200) {
        setDistrictData(response.data?.districts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStatesData();
  }, []);

  const fetchStatesData = async () => {
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
  const mappedData = districtData.map((data: any) => ({
    englishName: data.english_name,
    nepaliName: data.nepali_name,
    stateId: data.state_id,
    id: data.id,
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedStatesData = statesData.map((data: any) => ({
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
      await axios.delete(
        `${BASE_URL}/District/DeleteDistrict?id=${selectedId}`,
      );
      fetchData();
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
              onUpdate={(data) => setSelectedDistrict(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <DistrictForm
            selectedData={selectedDistrict}
            statesData={mappedStatesData}
            fetchData={fetchData}
          />
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
