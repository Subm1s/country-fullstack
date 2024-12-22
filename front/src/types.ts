export type Country = {
  name: string;
  countryCode: string;
};

export type Border = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | Border[];
};

// export type BordersData = {
//   status: "fulfilled" | "rejected";
//   value: {
//     commonName: string;
//     borders: Border[];
//   };
// };

export type PopulationData = {
  year: number;
  value: number;
}[];

export type FlagData = {
  status: "fulfilled" | "rejected";
  value: string;
};

export type CountryData = {
  bordersInfo: Border;
  populationInfo: PopulationData;
  flagLink: string;
};
