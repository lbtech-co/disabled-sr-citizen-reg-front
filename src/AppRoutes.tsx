import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import District from "./pages/district";
import StatesCrud from "./pages/statesCrud";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
      <Route path="/district" element={<District />} />
    </Routes>
  );
}
