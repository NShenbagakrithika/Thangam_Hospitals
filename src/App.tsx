import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Departments from "@/pages/Departments";
import DepartmentDetail from "@/pages/DepartmentDetail";
import Doctors from "@/pages/Doctors";
import DoctorProfile from "@/pages/DoctorProfile";
import Services from "@/pages/Services";
import HomeVisits from "@/pages/HomeVisits";
import RuralHealth from "@/pages/RuralHealth";
import GeriatricCare from "@/pages/GeriatricCare";
import PatientInformation from "@/pages/PatientInformation";
import Locations from "@/pages/Locations";
import HealthResources from "@/pages/HealthResources";
import RequestAppointment from "@/pages/RequestAppointment";
import RequestCallback from "@/pages/RequestCallback";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/home-visits" element={<HomeVisits />} />
          <Route path="/services/rural-health" element={<RuralHealth />} />
          <Route path="/geriatric-care" element={<GeriatricCare />} />
          <Route path="/patient-information" element={<PatientInformation />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/health-resources" element={<HealthResources />} />
          <Route path="/appointment" element={<RequestAppointment />} />
          <Route path="/callback" element={<RequestCallback />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
