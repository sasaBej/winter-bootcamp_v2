import { Link } from "react-router-dom";
import destructuring from "../../assets/img/destructuring.svg";
import webLogo from "../../assets/img/WebPage_logo.svg";
import { Button } from "../components/button/Button";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.destructuring}>
        <img className={styles.destrImage} src={destructuring} alt="destructuring" />
        <img className={styles.webLogoImage} src={webLogo} alt="webLogo" />
      </div>
      <Link to="/form">
        <Button title={"Join Us"} />
      </Link>
    </div >
  )
};
