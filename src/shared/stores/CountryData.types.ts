export interface StatesType {
  name: string;
}

export interface CountriesStatesDataType {
  name: string;
  states: StatesType[];
}



export interface CitiesDataType {
  data: string[];
}

export interface CountryType {
  country: string;
}
export const EMPTY_COUNTRY_OBJ:CountryType = {
  country: ""
}