import { useContext } from "react";
import { Button } from "../components/button/Button";
import { InputField } from "../components/inputField/InputField";
import styles from "./FormPage.module.scss";
import { observer } from "mobx-react-lite";
import { FormDataContext } from "./FormPage.store";

export const FormPage = observer(() => {
  const {
    formData,
    setFirstNameValue
  } = useContext(FormDataContext);


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
          // onFocus={d}
          />
          {/* <InputField />
          <InputField />
          <InputField /> */}
        </div>
        <h3>Address</h3>
        <div className={styles.addressInputs}>
          <input type="text" /><input type="text" />
        </div>
        <div className={styles.countryInptus}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className={styles.checkFields}>
          <div className={styles.errors}>
            <p>Please fix the following errors to proceed:</p>
            <ul>
              <li>First name is required</li>
              <li>Last name is required</li>
              <li>Wrong phone number format</li>
              <li>Email is required</li>
              <li>Address is required</li>
              <li>City is required</li>
            </ul>
          </div>
          <Button title="Send" />
        </div>
      </div>
    </section>
  )
});