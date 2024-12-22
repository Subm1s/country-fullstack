import { Box, Typography } from "@mui/material";

import { CountryData } from "../../types";

interface CountryDetailsProps {
  countryInfo: CountryData;
  name: string
}

const CountryDetails = ({ countryInfo, name }: CountryDetailsProps) => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">
        {name}
      </Typography>
      <img
        src={countryInfo?.flagLink}
        alt={`${countryInfo?.bordersInfo.commonName} flag`}
        style={{
          width: "200px",
          height: "auto",
          marginTop: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Box>
  );
};

export default CountryDetails;