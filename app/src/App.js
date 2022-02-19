import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Outcome from "./pages/outcome/Outcome";
import Apply from "./pages/apply/Apply";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/Contact/Contact";
import Mail from "./pages/mail/Mail";

function App() {
  const theme = useTheme();
  let minHeight = Number(theme.mixins.toolbar.minHeight);
  minHeight += 50;
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home topMargin={minHeight} />} />
        <Route path="/home" element={<Home topMargin={minHeight} />} />
        <Route path="/services" element={<Services topMargin={minHeight} />} />
        <Route path="/outcome" element={<Outcome topMargin={minHeight} />} />
        <Route path="/apply" element={<Apply topMargin={minHeight} />} />
        <Route path="/careers" element={<Careers topMargin={minHeight} />} />
        <Route path="/contact" element={<Contact topMargin={minHeight} />} />
        <Route path="/mail" element={<Mail topMargin={minHeight} />} />
      </Routes>
    </div>
  );
}

export default App;
