import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { EMPTY_FORM_DATA, FormDataType } from "./FormPage.types";

export class FormPageStore {
  public formData:FormDataType = EMPTY_FORM_DATA;

  constructor(){
    makeAutoObservable(this);
  }

  public setFirstNameValue = (value: string) => this.formData.firstName = value;

}

export const formDataStore = new FormPageStore();
export const FormDataContext = createContext(formDataStore);