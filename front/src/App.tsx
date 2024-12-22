import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import CountriesInfo from "./pages/CountriesInfo/CountriesInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route
            path="country-info/:countryData"
            element={<CountriesInfo />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
