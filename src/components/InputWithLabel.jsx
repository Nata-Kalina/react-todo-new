import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({ id, children, value, onInputChange }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        name="title"
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
