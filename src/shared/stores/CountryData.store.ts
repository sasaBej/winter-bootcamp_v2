import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { CountryDataType } from "./CountryData.types";
import { getCountryAndStates } from "../../api/CountryApi";

export class CountriesDataStore {
  public countriesData: CountryDataType[] | null = null;

  private setCountriesData = (value: CountryDataType[]) => this.countriesData = value;

  constructor() {
    makeAutoObservable(this);
  }

  public fetchData = async () => {
    try {
        const data = await getCountryAndStates();
        this.setCountriesData(data.data);
    } catch (error) {
      console.log(error)
    }
  }
}

export const countriesDataStore = new CountriesDataStore();
export const CountriesDataContext = createContext(countriesDataStore);