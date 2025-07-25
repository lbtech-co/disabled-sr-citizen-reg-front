import { useContext, useState } from "react";
import CustomTable from "../components/CustomTable";
import { DistrictData } from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import DistrictForm from "../components/forms/DistrictForm";
import { AppContext } from "../utils/Context";
import { DISTRICT_HEADERS } from "../constants/tableHeaders";

export default function DistrictCrud() {
  const { statesData, districtData, fetchDistrictData } =
    useContext(AppContext);

  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedDistrictData = districtData?.map((data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchingState: any = statesData?.find(
      (state) => state.id === data.state_id,
    );
    return {
      englishName: data.english_name,
      nepaliName: data.nepali_name,
      stateId: data.state_id,
      stateName: matchingState?.english_name,
      id: data.id,
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedStatesData = statesData?.map((data: any) => ({
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
      fetchDistrictData();
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
              headers={DISTRICT_HEADERS}
              data={mappedDistrictData}
              onUpdate={(data) => setSelectedDistrict(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <DistrictForm
            selectedData={selectedDistrict}
            statesData={mappedStatesData}
            fetchData={fetchDistrictData}
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
