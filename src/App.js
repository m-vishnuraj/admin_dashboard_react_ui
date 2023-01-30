import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Account from "./pages/Account";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/account"
            element={
              <AdminLayout>
                <Account />
              </AdminLayout>
            }
          />
          <Route
            path="/billing"
            element={
              <AdminLayout>
                <Billing />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
