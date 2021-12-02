import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, className, buttonClick } = props;
  return (
    <button onClick={buttonClick} className={className} type="button">{name}</button>
  );
}

Button.PropTypes = {
  className: '',
};

export default Button;
