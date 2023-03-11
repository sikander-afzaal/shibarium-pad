import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import DetailsIndex from "./pages/details/DetailsIndex";
import Landing from "./pages/landing/Landing";
import { language as content } from "./language";

const App = () => {
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

  return (
    <>
      <Header
        content={
          language === "EN" ? content.english.header : content.german.header
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
                  : content.german.landing
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
                  : content.german.projectDetails
              }
            />
          }
          path="/details"
        />
      </Routes>
      <Footer
        content={
          language === "EN" ? content.english.footer : content.german.footer
        }
      />
    </>
  );
};

export default App;
