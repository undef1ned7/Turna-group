import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SecondFooter from "./components/Footer/SecondFooter";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import BestPage from "./pages/BestPage/BestPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import TourPage from "./pages/TourPage/TourPage";

const AppContent = () => {
  const locations = useLocation();
  const isHomePage = locations.pathname !== "/";
  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus(locations.pathname);
  }, [locations]);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header status={status} setStatus={setStatus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-blog" element={<BlogPage />} />
          <Route path="/all-hotels" element={<BestPage />} />
          <Route path="/all-tour" element={<TourPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {isHomePage ? <Footer /> : <SecondFooter />}
    </div>
  );
};

export default AppContent;
