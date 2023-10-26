import { CitiesDataType, CountryType } from "../shared/stores/CountryData.types";
import { BaseApi } from "./BaseApi";


export const getCountryAndStates = async () => {
    const { data } = await BaseApi.get(`/states`);
    return data;
}

export const getCities = async (obj: CountryType): Promise<CitiesDataType> => {
    const { data } = await BaseApi.post("/cities", obj);
    return data;
}