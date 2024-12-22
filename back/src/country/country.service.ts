import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  async getCountries() {
    try {
      const data = await axios.get(
        `${process.env.COUNTRY_ENDPOINT}/AvailableCountries`,
      );
      if (data.data.length === 0) {
        throw new HttpException('Countries not found', HttpStatus.NO_CONTENT);
      }
      return data.data;
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new BadRequestException();
    }
  }

  async getCountryInfo(countryCode: string, countryName: string) {
    try {
      const bordersInfo = await this.getBorders(countryCode);
      const populationInfo = await this.getPopulation(countryCode);
      const flagLink = await this.getFlag(countryCode);
      return { bordersInfo, populationInfo, flagLink };
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new BadRequestException();
    }
  }

  private async getBorders(countryCode: string) {
    try {
      const data = await axios.get(
        `${process.env.COUNTRY_ENDPOINT}/CountryInfo/${countryCode}`,
      );

      return data?.data?.borders;
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new BadRequestException();
    }
  }

  private async getPopulation(countryCode: string) {
    try {
      const name = await this.getCountryNameByCode(countryCode)
      const data = await axios.post(
        `${process.env.POPULATION_ENDPOINT}/population`,
        {
          country: name,
        },
      );
      return data?.data?.data?.populationCounts;
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new BadRequestException();
    }
  }
  private async getFlag(countryCode: string) {
    try {
      const isoCode = await this.getCountryIsoByCode(countryCode);

      const { data } = await axios.post(
        `${process.env.POPULATION_ENDPOINT}/flag/images`,
        {
          iso2: isoCode,
        },
      );

      const flag = data.data?.flag;

      return flag;
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new BadRequestException();
    }
  }
  private async getCountryIsoByCode(countryCode: string) {
    try {
      const countryName = await this.getCountryNameByCode(countryCode);

      const { data } = await axios.post(
        `${process.env.POPULATION_ENDPOINT}/iso`,
        { country: countryName },
      );

      const iso2 = data.data?.Iso2;

      return iso2;
    } catch (error) {
      console.log(error);
      throw new HttpException('Server error occurred', HttpStatus.BAD_GATEWAY);
    }
  }
  private async getCountryNameByCode(countryCode: string) {
    try {
      const { data } = await axios.get(
        `${process.env.COUNTRY_ENDPOINT}/CountryInfo/${countryCode}`,
      );

      return data.commonName;
    } catch (error) {
      console.log(error);
      throw new HttpException('Server error occurred', HttpStatus.BAD_GATEWAY);
    }
  }
}
