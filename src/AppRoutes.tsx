import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import StatesCrud from "./pages/statesCrud";
import District from "./pages/district";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
      <Route path="/district" element={<District />} />
    </Routes>
  );
}
