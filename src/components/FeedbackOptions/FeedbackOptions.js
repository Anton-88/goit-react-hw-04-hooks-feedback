import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
import { v4 as uuidv4 } from "uuid";

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.feedback_container}>
      <ul className={styles.feedback_buttons}>
        {options.map((option) => (
          <li key={uuidv4()}>
            <button
              type="button"
              className={[styles.feedback_button_item, styles.custom_btn].join(
                " "
              )}
              onClick={onLeaveFeedback}
            >
              <span id={option}>{option} vote</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
