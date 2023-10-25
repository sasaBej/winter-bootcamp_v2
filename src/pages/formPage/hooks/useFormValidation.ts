import { useContext } from "react"
import { FormDataContext } from "../FormPage.store"
import { lastNameValidation, firstNameValidation, phoneNumberValidation, emailValidation, addressValidation, countryValidation } from "../../../shared/ValidationInputs";

export const useFormValidation = () => {
  const {
    formData: {
      firstName, 
      lastName, 
      phoneNumber,
      email,
      addressLine1,
      country
    },
    formErrors: {
      firstNameError,
      lastNameError,
      phoneNumberError,
      emailError,
      addressLineError,
      countryError
    },
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setEmailError,
    setAddressLineError,
    setCountryError
  } = useContext(FormDataContext);
  
  setFirstNameError(firstNameValidation(firstName));
  setLastNameError(lastNameValidation(lastName));
  setPhoneNumberError(phoneNumberValidation(phoneNumber));
  setEmailError(emailValidation(email));
  setAddressLineError(addressValidation(addressLine1));
  setCountryError(countryValidation(country));


  const validateError = () => {
     if ((firstNameError.message  !== "") && firstNameError.isTouched || 
     (lastNameError.message !== "") && lastNameError.isTouched ||
     (phoneNumberError.message !== "") && phoneNumberError.isTouched  ||
     (emailError.message !== "") && emailError.isTouched ||
     (addressLineError.message !== "") && addressLineError.isTouched ||
     (countryError.message !== "") && countryError.isTouched
     ) {
        return true;
    }
    return false;
  }

  return validateError;

};