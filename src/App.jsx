import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "../src/components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/Scroll/ScrollToTop"; 
import "./styles/index.module.css";

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    }
  }, [lang, i18n]);

  return children;
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
        <LanguageWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to={`/${localStorage.getItem("language") || "en"}`} />} />
            
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/projects" element={<Projects />} />
            <Route path="/:lang/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </LanguageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
