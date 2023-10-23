import { useContext } from "react"
import { FormDataContext } from "../FormPage.store"
import { lastNameValidation, firstNameValidation, phoneNumberValidation, emailValidation, addressValidation } from "../../../shared/ValidationInputs";

export const useFormValidation = () => {
  const {
    formData: {
      firstName, 
      lastName, 
      phoneNumber,
      email,
      addressLine1
    },
    formErrors: {
      firstNameError,
      lastNameError,
      phoneNumberError,
      emailError,
      addressLineError
    },
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setEmailError,
    setAddressLineError
  } = useContext(FormDataContext);
  
  setFirstNameError(firstNameValidation(firstName));
  setLastNameError(lastNameValidation(lastName));
  setPhoneNumberError(phoneNumberValidation(phoneNumber));
  setEmailError(emailValidation(email));
  setAddressLineError(addressValidation(addressLine1));

  const validateError = () => {
     if ((firstNameError.message  !== "") && firstNameError.isTouched || 
     (lastNameError.message !== "") && lastNameError.isTouched ||
     (phoneNumberError.message !== "") && phoneNumberError.isTouched  ||
     (emailError.message !== "") && emailError.isTouched ||
     (addressLineError.message !== "") && addressLineError.isTouched
     ) {
        return true;
    }
    return false;
  }

  return validateError;

};