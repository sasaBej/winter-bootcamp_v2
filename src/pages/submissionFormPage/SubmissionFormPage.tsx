import styles from "./SubmissionFormPage.module.scss";

export const SubmissionFormPage = () => {

  const storedData = sessionStorage.getItem("dataForm");
  const parsedData = storedData ? JSON.parse(storedData) : {};

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    addressLine1,
    addressLine2,
    country,
    state,
    city
  } = parsedData;

  return (
    <div className={styles.submissionFormPage}>
      <h2>Excellent! <br />See you in November 2023!</h2>
      <sub>Submission Summary:</sub>
      <div className={styles.dataContainer}>
        <p>{`First name: ${firstName}`}</p>
        <p>{`Last name: ${lastName}`}</p>
        <p>{`Phone number: ${phoneNumber}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Address: ${addressLine1}, ${addressLine2}`}</p>
        <p>{`Country: ${country}`}</p>
        <p>{`State: ${state ? state : "none"}`}</p>
        <p>{`City: ${city}`}</p>
      </div>
    </div>
  )
};