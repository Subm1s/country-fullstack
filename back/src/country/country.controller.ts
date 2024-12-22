import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('get-countries')
  async getCountries() {
    return await this.countryService.getCountries();
  }

  @Get('get-info')
  async GetCountryInfo(
    @Query('countryCode') countryCode: string,
    @Query('countryName') countryName: string,
  ) {
    return await this.countryService.getCountryInfo(countryCode, countryName);
  }
}
