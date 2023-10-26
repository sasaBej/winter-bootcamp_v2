import {  makeAutoObservable } from "mobx";
import { createContext } from "react";
import { CitiesDataType, CountriesStatesDataType, CountryType, EMPTY_COUNTRY_OBJ } from "./CountryData.types";
import { getCities, getCountryAndStates } from "../../api/CountryApi";

export class CountriesDataStore {
  public countriesStatesData: CountriesStatesDataType[] | null = null;
  public citiesData: CitiesDataType | null = null;
  public oneCountry: CountryType = EMPTY_COUNTRY_OBJ;

  private setCountriesData = (value: CountriesStatesDataType[]) => this.countriesStatesData = value;
  private setCitiesData = (value: CitiesDataType) => this.citiesData = value;
  public setOneCountry = (value: string) => this.oneCountry.country = value;

  constructor() {
    makeAutoObservable(this);
  }

  public fetchCountryStatesData = async () => {
    try {
        const data = await getCountryAndStates();
        this.setCountriesData(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  public fetchCitiesData = async () => {
    try {
      const cities = await getCities(this.oneCountry);
      this.setCitiesData(cities);
    } catch (error) {
      console.log(error);
    }
  }
}

export const countriesDataStore = new CountriesDataStore();
export const CountriesDataContext = createContext(countriesDataStore);