import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={options[0]}>
          {options[0]}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={options[1]}>
          {options[1]}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={options[2]}>
          {options[2]}
        </Button>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
