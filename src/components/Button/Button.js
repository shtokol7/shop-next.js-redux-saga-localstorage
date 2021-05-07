import React, { useState } from 'react';
import { useStylesButton } from './ButtonStyle';



const Button = ({
  children,
  onClick = () => {},
  typeStyle = 'brick',
  className,
}) => {
  const classes = useStylesButton()

  const handlerClick = () => {
    onClick()
  }

  if (typeStyle === 'brick') {
    return (
      <button
        onClick={handlerClick}
        className={`${classes.button__brick} ${className}`}
      >
        {children}
      </button>
    );
  }
 
  if (typeStyle === 'circle') {
    return (
      <button
        onClick={handlerClick}
        className={`${classes.button__circle} ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default Button