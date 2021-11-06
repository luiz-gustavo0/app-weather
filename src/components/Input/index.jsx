import React from 'react';
import { CustomInput } from './styles';

export const Input = ({ value, setValue, error, ...props }) => {
  return (
    <>
      <CustomInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      />
    </>
  );
};
