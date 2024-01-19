import { Route, Routes } from "react-router-dom";
import StatesCrud from "./pages/StatesCrud";
import Dashboard from "./pages/dashboard";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/states" element={<StatesCrud />} />
    </Routes>
  );
}
