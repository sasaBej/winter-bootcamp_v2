import classNames from "classnames";
import styles from "./SelectField.module.scss";

interface Props {
  labelTitle: string;
  required?: boolean;
  selected: string;
  children: React.ReactNode;
  onChange: (value: string) => void;
  onFocus?: () => boolean;
  isValid?: boolean;
}

export const SelectField = ({
  labelTitle,
  onChange,
  required,
  selected,
  children,
  isValid,
  onFocus
}: Props) => {
  return (
    <div className={styles.selectField}>
      <label className={classNames({
        [styles.requiredStar]: required
      })}>{labelTitle}</label>
      <select
        value={selected}
        required={required}
        onChange={event => onChange(event.target.value)}
        onFocus={onFocus}
        className={classNames({
          [styles.inputValid]: isValid,
          [styles.inputError]: !isValid,
          [styles.unRequired]: !required
        })}
      >
        <option disabled={true} value="" className={styles.disabledOption}>
          {labelTitle}
        </option>
        {children}
      </select>
    </div>
  )
}
