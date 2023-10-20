import { Button } from "../button/Button";
import ddroiddLogo from "../../../assets/img/ddroidd_logo.svg";

import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logoHeader} src={ddroiddLogo} alt="logo" />
      </Link>
      <h1>Autumn - Winter Bootcamp</h1>
      {
        location.pathname === "/" ?
          (<Link to="/form">
            <Button title="Join Us" />
          </Link>) : (
            // fast solution)))
            <div></div>
          )
      }
    </header>
  )
}
