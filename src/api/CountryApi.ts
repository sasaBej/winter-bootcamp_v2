import { BaseApi } from "./BaseApi";


export const getCountryAndStates = async () => {
    const { data } = await BaseApi.get(`/states`);
    return data;
}

// export const getStates = async (country: CountryType): Promise<StatesTypes> => {
//     const { data } = await BaseApi.post(`/states`, country );
//     return data;
// }

// export const Countries = async (obj: unknown) => {
//     const { data } = await BaseApi.post("/state/cities", obj);
//     return data
// }