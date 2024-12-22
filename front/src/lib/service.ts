import { Country, CountryData } from "../types";

export const API_URL = import.meta.env.VITE_APP_KEY;

export class Service {
  static async getCountries(): Promise<Country[]> {
    const response = await fetch(`${API_URL}/country/get-countries`);
    const data = await response.json();
    return data;
  }

  static async getCountryInfo(
    countryCode: string,
    countryName: string
  ): Promise<CountryData> {
    const response = await fetch(
      `${API_URL}/country/get-info?countryCode=${countryCode}&countryName=${countryName}`
    );
    const data = await response.json();
    return data;
  }
}
