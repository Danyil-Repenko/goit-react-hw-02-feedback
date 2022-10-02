import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div style={{ margin: '20px 0 0 20px' }}>
      {title && <h2 style={{ margin: 0 }}>{title}</h2>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
