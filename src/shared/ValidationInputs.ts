export const firstNameValidation = (name: string) => {
  if (!name.length) {
    return `First name is required`;
  }

  return "";
}

export const lastNameValidation = (name: string) => {
  if (!name.length) {
    return `Last name is required`;
  }

  return "";
}

export const phoneNumberValidation = (name: string) => {
  const regex = new RegExp(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/);
  const isValidRegex = regex.test(name);

  if (!isValidRegex) {
    return "Wrong phone number format";
  }

  return "";
}

export const emailValidation = (name: string) => {
  const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "gm");
    const isEmailValid = emailRegex.test(name);

  if (!isEmailValid) {
    return "Email is required";
  }

  return "";
}

export const addressValidation = (name: string) => {
  if (!name.length) {
    return "Address is required";
  }

  return "";
}

export const countryValidation = (name: string) => {
  if (!name.length) {
    return "Country is required";
  }

  return "";
}