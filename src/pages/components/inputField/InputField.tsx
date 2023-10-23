import classNames from "classnames";
import styles from "./InputField.module.scss";

interface Props {
  placeholder: string;
  labelTitle: string;
  type: string;
  value: string;
  isValid?: boolean;
  onChange: (value: string) => void;
  onFocus?: () => boolean;
  required: boolean;
}

export const InputField = ({
  placeholder,
  labelTitle,
  type,
  value,
  isValid,
  onChange,
  onFocus,
  required
}: Props) => {
  return (
    <div className={styles.inputField}>
      <label
        htmlFor={labelTitle}
        className={classNames({
          [styles.requiredStar]: required
        })}
      >{labelTitle}</label>
      <input
        id={labelTitle}
        required={required}
        value={value}
        onChange={event => onChange(event.target.value)}
        type={type}
        onFocus={onFocus}
        placeholder={placeholder}
        className={classNames(styles.input, {
          [styles.inputValid]: isValid,
          [styles.inputError]: !isValid,
          [styles.unRequired]: !required
        })}
      />
    </div >
  )
};