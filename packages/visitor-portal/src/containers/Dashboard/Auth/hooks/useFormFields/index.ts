import { useState } from 'react';
import { AuthField } from '../../interfaces';
import { UseFormFieldsProps } from './interfaces';

export const useFormFields = <
  Fields extends Partial<Record<AuthField, string>>,
>({
  defaultValues,
}: UseFormFieldsProps<Fields>) => {
  const [fields, setFields] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  const onFieldChange = (field: AuthField, value: string) => {
    const newFields = { ...fields, [field]: value };
    setIsValid(!Object.values(newFields).some((value) => value === ''));
    setFields(newFields);
  };

  return {
    fields,
    isValid,
    onFieldChange,
  };
};
