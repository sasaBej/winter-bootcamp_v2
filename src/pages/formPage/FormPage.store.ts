import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { EMPTY_FORM_DATA, EMPTY_FORM_ERRORS, FormDataType, FormErrorsType } from "./FormPage.types";

export class FormPageStore {
  public formData: FormDataType = EMPTY_FORM_DATA;
  public formErrors: FormErrorsType = EMPTY_FORM_ERRORS;

  constructor(){
    makeAutoObservable(this);
  }

  public setFirstNameValue = (value: string) => this.formData.firstName = value;
  public setFirstNameError = (value: string) => this.formErrors.firstNameError.message = value;
  public setFirstNameIsTouched = () => this.formErrors.firstNameError.isTouched = true;

  public setLastNameValue = (value: string) => this.formData.lastName = value;
  public setLastNameError = (value: string) => this.formErrors.lastNameError.message = value;
  public setLastNameIsTouched = () => this.formErrors.lastNameError.isTouched = true;
  
  public setPhoneNumberValue = (value: string) => this.formData.phoneNumber = value;
  public setPhoneNumberError = (value: string) => this.formErrors.phoneNumberError.message = value;
  public setPhoneNumberIsTouched = () => this.formErrors.phoneNumberError.isTouched = true;

  public setEmailValue = (value: string) => this.formData.email = value;
  public setEmailError = (value: string) => this.formErrors.emailError.message = value;
  public setEmailIsTouched = () => this.formErrors.emailError.isTouched = true;

  public setAddressLine1Value = (value: string) => this.formData.addressLine1 = value;
  public setAddressLineError = (value: string) => this.formErrors.addressLineError.message = value;
  public setAddressLineIsTouched = () => this.formErrors.addressLineError.isTouched = true;

  public setAddressLine2Value = (value: string) => this.formData.addressLine2 = value;

  public setCountryValue = (value: string) => this.formData.country = value;
  public setCountryError = (value: string) => this.formErrors.countryError.message = value;
  public setCountryIsTouched = () => this.formErrors.countryError.isTouched = true;

  public reset = () => {
    this.formData = EMPTY_FORM_DATA;
    this.formErrors = EMPTY_FORM_ERRORS;
  }
}

export const formDataStore = new FormPageStore();
export const FormDataContext = createContext(formDataStore);