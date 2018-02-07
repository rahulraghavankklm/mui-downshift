import React from 'react';

import TextField from 'material-ui-next/TextField';
import { FormControl, FormHelperText } from 'material-ui-next/Form';
import MuiInput, { InputLabel, InputAdornment } from 'material-ui-next/Input';
import { LinearProgress } from 'material-ui-next/Progress';

import IconButton from 'material-ui-next/IconButton';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import Cancel from 'material-ui-icons/Cancel';

function Input({ getInputProps, loading, downshiftProps }) {
  const { label, disabled, ...inputProps} = downshiftProps.getInputProps({ ...(getInputProps && getInputProps(downshiftProps)) })

  return (
    <FormControl disabled={disabled} fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiInput
        endAdornment={
          <InputAdornment position="end">
            { !disabled && !!downshiftProps.selectedItem && (
              <IconButton onClick={downshiftProps.clearSelection}>
                <Cancel />
              </IconButton>
            )}

            { !disabled && (
              <IconButton onClick={downshiftProps.toggleMenu}>
                {downshiftProps.isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </IconButton>
            )}
          </InputAdornment>
        }
        {...inputProps}
      />
      { loading && (
        <LinearProgress style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2
        }}/>
      )}
    </FormControl>
  );
}

export default Input;
