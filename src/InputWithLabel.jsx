import React from 'react';

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

export default InputWithLabel;
