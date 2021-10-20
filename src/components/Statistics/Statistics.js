import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import { v4 as uuidv4 } from "uuid";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedback_ratio_container}>
      <ul className={styles.feedback_ratio_list}>
        <li key={uuidv4()} className={styles.feedback_ratio_item}>
          <p className={styles.feedback_ratio_title}>Good: {good}</p>
        </li>
        <li key={uuidv4()} className={styles.feedback_ratio_item}>
          <p className={styles.feedback_ratio_title}>Neutral: {neutral}</p>
        </li>
        <li key={uuidv4()} className={styles.feedback_ratio_item}>
          <p className={styles.feedback_ratio_title}>Bad: {bad}</p>
        </li>
        <li key={uuidv4()} className={styles.feedback_ratio_item}>
          <p className={styles.feedback_ratio_title}>Total: {total}</p>
        </li>
        <li key={uuidv4()} className={styles.feedback_ratio_item}>
          <p className={styles.feedback_ratio_title}>
            Positive feedback: {positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
