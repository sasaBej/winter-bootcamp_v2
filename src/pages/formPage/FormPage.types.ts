export interface FormDataType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
}

export const EMPTY_FORM_DATA: FormDataType = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  country: "",
  state: "",
  city: ""
};

export interface ErrorsDetails {
  message: string;
  isTouched: boolean;
}

export interface FormErrorsType {
  firstNameError: ErrorsDetails;
  lastNameError: ErrorsDetails;
  phoneNumberError: ErrorsDetails;
  emailError: ErrorsDetails;
  addressLineError: ErrorsDetails;
  countryError: ErrorsDetails;
  cityError: ErrorsDetails;
}

export const EMPTY_FORM_ERRORS: FormErrorsType = {
  firstNameError: {
    message: "",
    isTouched: false
  },
  lastNameError: { 
    message: "",
    isTouched: false
  },
  phoneNumberError: {
    message: "",
    isTouched: false
  },
  emailError: {
    message: "",
    isTouched: false
  },
  addressLineError: {
    message: "",
    isTouched: false
  },
  countryError: {
    message: "",
    isTouched: false
  },
  cityError: {
    message: "",
    isTouched: false
  }
};