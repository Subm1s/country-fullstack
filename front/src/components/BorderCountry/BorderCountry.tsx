import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { Border, CountryData } from "../../types";

interface BorderCountriesProps {
  countryInfo: CountryData;
}

const BorderCountry = ({ countryInfo }: BorderCountriesProps) => {
  const navigate = useNavigate();

  const handleCountryClick = (countryCode: string, commonName: string) => {
    navigate(`/country-info/${countryCode}_${commonName}`);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Border Countries</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt: 2 }}>
        {Array.isArray(countryInfo?.bordersInfo) && countryInfo?.bordersInfo.map((border: Border) => (
          <Button
            key={border.countryCode}
            variant="contained"
            color="primary"
            onClick={() =>
              handleCountryClick(border.countryCode, border.commonName)
            }
            sx={{
              textTransform: "none",
              fontSize: "14px",
            }}
          >
            {border.commonName}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default BorderCountry;
