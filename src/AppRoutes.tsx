import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DistrictCrud from "./pages/DistrictCrud";
import StatesCrud from "./pages/StatesCrud";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
      <Route path="/districts" element={<DistrictCrud />} />
    </Routes>
  );
}
