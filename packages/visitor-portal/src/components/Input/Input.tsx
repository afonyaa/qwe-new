import { forwardRef } from 'react';
import { InputProps } from './interfaces';
import { inputClasses } from './styles';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={inputClasses} {...props} />;
});

export default Input;
