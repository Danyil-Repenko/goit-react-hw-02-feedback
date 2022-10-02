import PropTypes from 'prop-types';
import { Wraper } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Wraper>{message ? <p>{message}</p> : <p>No info</p>}</Wraper>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
