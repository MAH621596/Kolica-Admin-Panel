import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Listings, Users, Merchants, PermiumMerchants, Filters, Transactions } from "@/pages";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/merchants" element={<Merchants />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/premium-Merchants" element={<PermiumMerchants />} />
      </Routes>
  );
}

export default App;