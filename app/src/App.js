import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Outcome from "./pages/outcome/Outcome";
import Careers from "./pages/career/Careers";
// import Careers from "./pages/careers/Careers";
import Contact from "./pages/Contact/Contact";
import Mail from "./pages/Features/Facilities";



function App() {
  const theme = useTheme();
  let minHeight = Number(theme.mixins.toolbar.minHeight);
  minHeight += 20;
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home topMargin={minHeight} />} />
        <Route path="/home" element={<Home topMargin={minHeight} />} />
        <Route path="/services" element={<Services topMargin={minHeight} />} />
        <Route path="/outcome" element={<Outcome topMargin={minHeight} />} />
        <Route path="/careers" element={<Careers topMargin={minHeight} />} />
        {/* <Route path="/careers" element={<Careers topMargin={minHeight} />} /> */}
        <Route path="/contact" element={<Contact topMargin={minHeight} />} />
        <Route path="/Facilities" element={<Mail topMargin={minHeight} />} />
        
      </Routes>
    </div>
  );
}

export default App;
