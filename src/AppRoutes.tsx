import { Route, Routes } from "react-router-dom";
import StatesCrud from "./pages/StatesCrud";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/states" element={<StatesCrud />} />
    </Routes>
  );
}
