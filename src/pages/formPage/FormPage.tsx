import { useContext, useEffect } from "react";
import { Button } from "../components/button/Button";
import { InputField } from "../components/inputField/InputField";
import { observer } from "mobx-react-lite";
import { FormDataContext } from "./FormPage.store";
import { useFormValidation } from "./hooks/useFormValidation";
import { SelectField } from "../components/selectField/SelectField";
import { CountriesDataContext } from "../../shared/stores/CountryData.store";
import styles from "./FormPage.module.scss";

export const FormPage = observer(() => {
  const {
    formData,
    formErrors,
    setFirstNameValue,
    setFirstNameIsTouched,
    setLastNameValue,
    setLastNameIsTouched,
    setPhoneNumberIsTouched,
    setPhoneNumberValue,
    setEmailValue,
    setEmailIsTouched,
    setAddressLine1Value,
    setAddressLine2Value,
    setAddressLineIsTouched,
    setCountryValue,
    setCountryIsTouched,
    setStateValue,
    setCityIsTouched,
    setCityValue,
    reset
  } = useContext(FormDataContext);

  const { countriesStatesData, fetchCountryStatesData, fetchCitiesData, citiesData } = useContext(CountriesDataContext);

  const validateError = useFormValidation();

  useEffect(() => {
    fetchCountryStatesData();

    return () => {
      reset()
    }
  }, [reset, fetchCountryStatesData, fetchCitiesData]);

  return (
    <section className={styles.formPage}>
      <h2>Application Form</h2>
      <div className={styles.form}>
        <h3>Contact Information</h3>
        <div className={styles.contactInfoInputs}>
          <InputField
            required={true}
            labelTitle="First Name"
            placeholder="First Name"
            type="text"
            value={formData.firstName}
            onChange={setFirstNameValue}
            onFocus={setFirstNameIsTouched}
            isValid={!formErrors.firstNameError.isTouched || !formErrors.firstNameError.message}
          />
          <InputField
            required={true}
            labelTitle="Last Name"
            placeholder="Last Name"
            type="text"
            value={formData.lastName}
            onChange={setLastNameValue}
            onFocus={setLastNameIsTouched}
            isValid={!formErrors.lastNameError.isTouched || !formErrors.lastNameError.message}
          />
          <InputField
            required={true}
            labelTitle="Phone number"
            placeholder="+40 711 111 111"
            type="tel"
            value={formData.phoneNumber}
            onChange={setPhoneNumberValue}
            onFocus={setPhoneNumberIsTouched}
            isValid={!formErrors.phoneNumberError.isTouched || !formErrors.phoneNumberError.message}
          />
          <InputField
            required={true}
            labelTitle="Email address"
            placeholder="john@doe.com"
            type="text"
            value={formData.email}
            onChange={setEmailValue}
            onFocus={setEmailIsTouched}
            isValid={!formErrors.emailError.isTouched || !formErrors.emailError.message}
          />
        </div>
        <h3>Address</h3>
        <div className={styles.addressInputs}>
          <InputField
            required={true}
            labelTitle="Address Line 1"
            placeholder="Street name & number"
            type="text"
            value={formData.addressLine1}
            onChange={setAddressLine1Value}
            onFocus={setAddressLineIsTouched}
            isValid={!formErrors.addressLineError.isTouched || !formErrors.addressLineError.message}
          />
          <InputField
            required={false}
            labelTitle="Address Line 2"
            placeholder="Suit, apartment"
            type="text"
            value={formData.addressLine2}
            onChange={setAddressLine2Value}
          />
        </div>
        <div className={styles.countryInputs}>
          <SelectField
            required={true}
            labelTitle="Country"
            onChange={setCountryValue}
            onClick={() => fetchCitiesData()}
            selected={formData.country}
            onFocus={setCountryIsTouched}
            isValid={!formErrors.countryError.isTouched || !formErrors.countryError.message}
            children={
              countriesStatesData?.map((country, index) => (
                <option key={index}>{country.name}</option>
              ))
            }
          />
          <SelectField
            required={false}
            labelTitle="State"
            onChange={setStateValue}
            selected={formData.country}
            children={
              countriesStatesData?.find(country => country.name === formData.country)?.states.map((state, index) => (
                <option key={index} value={state.name}>{state.name}</option>
              ))
            }
          />
          <SelectField
            required={true}
            labelTitle="Cities"
            onChange={setCityValue}
            selected={formData.city}
            onFocus={setCityIsTouched}
            isValid={!formErrors.cityError.isTouched || !formErrors.cityError.message}
            children={
              citiesData?.data.map((cities, index) => (
                <option key={index}>{cities}</option>
              ))
            }
          />
        </div>
        <div className={styles.checkFields}>
          <div className={styles.errors}>
            {validateError() ? <div>Please fix the following errors to proceed:</div> : ""}
            <p>{formErrors.firstNameError.isTouched ? formErrors.firstNameError.message : ""}</p>
            <p>{formErrors.lastNameError.isTouched ? formErrors.lastNameError.message : ""}</p>
            <p>{formErrors.phoneNumberError.isTouched ? formErrors.phoneNumberError.message : ""}</p>
            <p>{formErrors.emailError.isTouched ? formErrors.emailError.message : ""}</p>
            <p>{formErrors.addressLineError.isTouched ? formErrors.addressLineError.message : ""}</p>
            <p>{formErrors.countryError.isTouched ? formErrors.countryError.message : ""}</p>
            <p>{formErrors.cityError.isTouched ? formErrors.cityError.message : ""}</p>
          </div>
          <Button title="Send" />
        </div>
      </div>
    </section>
  )
});