import { useParams, useNavigate } from "react-router-dom";

import { Box, CircularProgress, Button } from "@mui/material";

import { useEffect, useState } from "react";

import BorderCountry from "../../components/BorderCountry/BorderCountry";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import PopulationChart from "../../components/PopulationChart/PopulationChart";
import { Service } from "../../lib/service";
import { CountryData } from "../../types";

const CountriesInfo = () => {
  const navigate = useNavigate();
  const { countryData } = useParams();
  const [countryInfo, setCountryInfo] = useState<CountryData | null>(null);
  const [countryCode = "", countryName = ""]: [string, string] =
    (countryData?.split("_") ?? ["", ""]) as [string, string];

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        if (!countryCode) {
          console.log("Country code is not available");
          return;
        }

        const data = await Service.getCountryInfo(countryCode, countryName);
        setCountryInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountryInfo();
  }, [countryCode]);
  return (
    <Box sx={{ padding: "20px", width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(`/`)}
        sx={{
          textTransform: "none",
          fontSize: "14px",
        }}
      >
        Main page
      </Button>
      {!countryInfo ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CountryDetails countryInfo={countryInfo} name={countryName} />
          <BorderCountry countryInfo={countryInfo} />
          <PopulationChart countryInfo={countryInfo} />
        </>
      )}
    </Box>
  );
};

export default CountriesInfo;
