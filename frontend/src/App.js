import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ELQsPage from "./pages/ELQsPage";
import ActivityToELQPage from "./pages/ActivityToELQPage";
import GalleryPage from "./pages/GalleryPage";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import InstitutionsPage from "./pages/InstitutionsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import DayAtManthanPage from "./pages/DayAtManthanPage";
import ContactPage from "./pages/ContactPage";
import SubmitReviewPage from "./pages/SubmitReviewPage";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/findmyguide">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/elqs" element={<ELQsPage />} />
          <Route path="/how-it-works" element={<ActivityToELQPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:slug" element={<GalleryCategoryPage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/submit-review" element={<SubmitReviewPage />} />
          <Route path="/day-at-manthan" element={<DayAtManthanPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;

