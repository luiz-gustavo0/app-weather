import React from 'react';
import { InputRadioGroup } from './styles';

export const InputRadio = ({ options, value, setValue }) => {
  return (
    <InputRadioGroup>
      {options.map((option) => (
        <label key={option}>
          <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={(event) => setValue(event.target.value)}
          />
          {option}
        </label>
      ))}
    </InputRadioGroup>
  );
};
