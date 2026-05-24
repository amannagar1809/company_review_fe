import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import CompanyDetails from "../pages/CompanyDetails/CompanyDetails";
import AddCompany from "../pages/AddCompany/AddCompany";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/companies/:id"
        element={<CompanyDetails />}
      />

      <Route
        path="/add-company"
        element={<AddCompany />}
      />

    </Routes>
  );
}