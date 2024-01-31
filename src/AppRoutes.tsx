import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DistrictCrud from "./pages/DistrictCrud";
import StatesCrud from "./pages/StatesCrud";
import LocalLevelCrud from "./pages/LocalLevelCrud";
import DisabledPersonCard from "./pages/DisabledPersonCard";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
      <Route path="/districts" element={<DistrictCrud />} />
      <Route path="/locallevel" element={<LocalLevelCrud />} />
      <Route path="/disabled-card" element={<DisabledPersonCard />} />
    </Routes>
  );
}
