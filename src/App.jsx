import Login from './views/Login/Login.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import Principal from './views/Panel_Principal/Principal.jsx';
import Admin from './views/Admin/Admin.jsx';
import AdminArea from './views/Admin_Area/AdminArea.jsx';
import AdminCompany from './views/Admin_Company/AdminCompany.jsx'
import Applicant from './views/Applicant/Applicant.jsx'
import Troubleshooter from './views/Troubleshooter/Troubleshooter.jsx'
import User from './views/User/User.jsx';
import ProfileUser from './views/User/Profile.jsx';
import DashboardApplicant from './views/Panel_Principal/DashboardApplicant.jsx';
import AddUser from './views/User/AddUser.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Principal></Principal>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/adminArea/*" element={<AdminArea></AdminArea>}></Route>
      <Route path ="/adminArea/*" element ={<AdminArea></AdminArea>}></Route>
      <Route path ="/adminCompany/*" element ={<AdminCompany></AdminCompany>}></Route>
      <Route path ="/applicant/*" element ={<Applicant></Applicant>}></Route>
      <Route path ="/troubleshooter/*" element ={<Troubleshooter></Troubleshooter>}></Route>
      <Route path="/user" element={<User />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/user/Profile" element={<ProfileUser />} />
      <Route path="/dashboardApplicant" element={<DashboardApplicant />} />

    </Routes>
  );
}

export default App;
