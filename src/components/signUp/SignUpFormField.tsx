import FormField from '../common/Form/FormField';
import Input from '../common/Form/Input';
import type { FieldErrors, FormState, UseFormRegister } from 'react-hook-form';
import type { SampleFormValues } from '../../lib/shcemas/sample';

type FieldName = keyof SampleFormValues;

interface SignUpFormFieldProps {
  id: FieldName;
  label: string;
  placeholder: string;
  warning?: string;
  showPasswordToggle?: boolean;
  readOnly?: boolean;
  register: UseFormRegister<SampleFormValues>;
  errors: FieldErrors<SampleFormValues>;
  dirtyFields: FormState<SampleFormValues>['dirtyFields'];
}

function SignUpFormField({
  id,
  label,
  placeholder,
  warning,
  showPasswordToggle = false,
  readOnly = false,
  register,
  errors,
  dirtyFields,
}: SignUpFormFieldProps) {
  const error = errors[id]?.message;
  const isDirty = !!dirtyFields[id];

  return (
    <FormField
      id={id}
      label={label}
      warning={warning}
      error={error}
      isDirty={isDirty}
      varient="signUp"
    >
      <Input
        id={id}
        placeholder={placeholder}
        warning={warning}
        showPasswordToggle={showPasswordToggle}
        readOnly={readOnly}
        registration={register(id)}
        error={error}
        isDirty={isDirty}
      />
    </FormField>
  );
}

export default SignUpFormField;
