import { useContext, useState } from "react";
import CustomTable from "../components/CustomTable";
import { DistrictData } from "../interfaces/ComponentInterface";
import CustomDialog from "../components/CustomDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { AppContext } from "../utils/Context";
import { LOCAL_LEVEL_HEADERS } from "../constants/tableHeaders";
import LocalLevelForm from "../components/forms/LocalLevelForm";

export default function LocalLevelCrud() {
  const { districtData, localLevelData, fetchLocalLevelData } =
    useContext(AppContext);

  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedLocalLevelData = localLevelData?.map((data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchingDistrict: any = districtData?.find(
      (state) => state.id === data.district_id,
    );
    return {
      districtName: matchingDistrict?.english_name,
      englishName: data.english_name,
      nepaliName: data.nepali_name,
      districtId: data.district_id,
      type: data.type,
      id: data.id,
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedDistrictData = districtData?.map((data: any) => ({
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
      await axios.delete(`${BASE_URL}/Local/DeleteLocal?id=${selectedId}`);
      fetchLocalLevelData();
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
              headers={LOCAL_LEVEL_HEADERS}
              data={mappedLocalLevelData}
              onUpdate={(data) => setSelectedDistrict(data)}
              onDelete={(id) => handleDialog(id)}
            />
          </div>
          <LocalLevelForm
            selectedData={selectedDistrict}
            districtsData={mappedDistrictData}
            fetchData={fetchLocalLevelData}
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
