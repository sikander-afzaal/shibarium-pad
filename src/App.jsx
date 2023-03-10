import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import DetailsIndex from "./pages/details/DetailsIndex";
import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<DetailsIndex />} path="/details" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
