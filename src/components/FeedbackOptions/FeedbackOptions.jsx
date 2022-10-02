import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options: { goodValue, neutralValue, badValue },
}) => {
  return (
    <List>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={goodValue}>
          {goodValue}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={neutralValue}>
          {neutralValue}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={badValue}>
          {badValue}
        </Button>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
