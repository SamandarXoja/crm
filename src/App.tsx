/* eslint-disable @typescript-eslint/no-unused-vars */

import { Route, Routes, } from "react-router";
import StatusUser from "./pages/status-user";
import Sidebar from "./sidebar";
import Home from "./pages/Home";
import CallCustmor from "./pages/call-clients";
import RealEstate from "./pages/real-estate";
import Manager from "./pages/manager";
import Reports from "./pages/reports";
import DetailClient from "./pages/detail-clients";

function App() {
  // const navigate = useNavigate();



  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/detail-clients/:id" element={<DetailClient />} />
            <Route path="/status-user" element={<StatusUser />}></Route>
            <Route path="/call-clients" element={<CallCustmor />}></Route>
            <Route path="/real-estate" element={<RealEstate />}></Route>
            <Route path="/manager" element={<Manager />}></Route>
            <Route path="/reports" element={<Reports />}></Route>






          </Routes>
        </div>
      </div>


    </>
  );
}



export default App