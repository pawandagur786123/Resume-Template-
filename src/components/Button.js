
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--small','btn--medium', 'btn--large'];

export const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
  hasMargin
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        style={hasMargin ? hasMargin : ({})}
      >
        {children}
      </button>
  );
};
