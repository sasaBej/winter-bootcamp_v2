import cookie from "../../../assets/img/cookie.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Come to the dark side... we have</div>
      <img src={cookie} alt="cookie" />
    </footer>
  )
}
