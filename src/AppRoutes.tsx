import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatesCrud from "./pages/StatesCrud";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
    </Routes>
  );
}
