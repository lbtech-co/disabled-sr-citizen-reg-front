import { createContext, useState, ReactNode, useEffect } from "react";
import { DistrictData, StateData } from "../interfaces/ComponentInterface";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

interface AppContextType {
  statesData: StateData[];
  districtData: DistrictData[];
  fetchStatesData: () => void;
  fetchDistrictData: () => void;
}

const AppContext = createContext<AppContextType>({
  statesData: [],
  districtData: [],
  fetchStatesData: () => {},
  fetchDistrictData: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [statesData, setStatesData] = useState<StateData[]>([]);
  const [districtData, setDistrictData] = useState<DistrictData[]>([]);

  useEffect(() => {
    fetchStatesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (statesData) {
      fetchDistrictData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statesData]);

  const fetchData = async (
    endpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => void,
  ) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);

      if (response.status === 200) {
        onSuccess(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDistrictData = () => {
    fetchData("District/GetAllDistricts", (data) => {
      setDistrictData(data.districts);
    });
  };

  const fetchStatesData = () => {
    fetchData("State/GetAllStates", (data) => {
      setStatesData(data.states);
    });
  };

  const contextValue: AppContextType = {
    statesData,
    districtData,
    fetchStatesData,
    fetchDistrictData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
