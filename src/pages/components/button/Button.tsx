import styles from "./Button.module.scss";

interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean | undefined;
}

export const Button = ({ title, onClick, disabled }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >{title}
    </button>
  )
};