import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import DistrictCrud from "./pages/DistrictCrud";
import StatesCrud from "./pages/statesCrud";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
      <Route path="/district" element={<DistrictCrud />} />
    </Routes>
  );
}
