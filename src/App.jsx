import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import DetailsIndex from "./pages/details/DetailsIndex";
import Landing from "./pages/landing/Landing";
import { language as content } from "./language";

const App = () => {
  const { pathname } = useLocation();
  const [language, setLanguage] = useState("");
  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    } else {
      localStorage.setItem("language", "EN");
    }
  }, []);
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header
        content={
          language === "EN" ? content.english.header : content.chinese.header
        }
        language={language}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route
          element={
            <Landing
              content={
                language === "EN"
                  ? content.english.landing
                  : content.chinese.landing
              }
            />
          }
          path="/"
        />
        <Route
          element={
            <DetailsIndex
              content={
                language === "EN"
                  ? content.english.projectDetails
                  : content.chinese.projectDetails
              }
            />
          }
          path="/details"
        />
      </Routes>
      <Footer
        content={
          language === "EN" ? content.english.footer : content.chinese.footer
        }
      />
    </>
  );
};

export default App;
