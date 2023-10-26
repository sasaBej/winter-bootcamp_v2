import { useContext } from "react"
import { FormDataContext } from "../FormPage.store"
import { lastNameValidation, firstNameValidation, phoneNumberValidation, emailValidation, addressValidation, countryValidation, cityValidation } from "../../../shared/ValidationInputs";

export const useFormValidation = () => {
  const {
    formData: {
      firstName, 
      lastName, 
      phoneNumber,
      email,
      addressLine1,
      country,
      city
    },
    formErrors: {
      firstNameError,
      lastNameError,
      phoneNumberError,
      emailError,
      addressLineError,
      countryError,
      cityError
    },
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setEmailError,
    setAddressLineError,
    setCountryError,
    setCityError
  } = useContext(FormDataContext);
  
  setFirstNameError(firstNameValidation(firstName));
  setLastNameError(lastNameValidation(lastName));
  setPhoneNumberError(phoneNumberValidation(phoneNumber));
  setEmailError(emailValidation(email));
  setAddressLineError(addressValidation(addressLine1));
  setCountryError(countryValidation(country));
  setCityError(cityValidation(city))


  const validateError = () => {
     if ((firstNameError.message  !== "") && firstNameError.isTouched || 
     (lastNameError.message !== "") && lastNameError.isTouched ||
     (phoneNumberError.message !== "") && phoneNumberError.isTouched  ||
     (emailError.message !== "") && emailError.isTouched ||
     (addressLineError.message !== "") && addressLineError.isTouched ||
     (countryError.message !== "") && countryError.isTouched ||
     (cityError.message !== "") && cityError.isTouched
     ) {
        return true;
    }
    return false;
  }

  return validateError;

};