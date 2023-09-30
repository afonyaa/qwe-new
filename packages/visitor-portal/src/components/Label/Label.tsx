import { FC } from 'react';
import { LabelProps } from './interfaces';
import { labelClasses } from './styles';

const Label: FC<LabelProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <label {...restProps} className={labelClasses}>
      {children}
    </label>
  );
};

export default Label;
