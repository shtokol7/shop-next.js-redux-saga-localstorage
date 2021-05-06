import React from 'react'
import { useStylesCheckBox } from './CheckboxStyle';

export const CheckBox = (props) => {
  const classes = useStylesCheckBox();

  return (
    <label className={classes.checkbox}>
      <input
        key={props.id}
        type="checkbox"
        value={props.value}
      />
      <div className={classes.checkbox_indicator}></div>
      <span className="">{props.value}</span>
    </label>
  )
}

export default CheckBox