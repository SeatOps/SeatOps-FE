import FormField from '../common/Form/FormField';
import Input from '../common/Form/Input';
import type { FieldErrors, FormState, UseFormRegister } from 'react-hook-form';
import type { SampleFormValues } from '../../lib/shcemas/sample';
import Button from '../common/Button';

type FieldName = keyof SampleFormValues;

interface SignUpButtonFormFieldProps {
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

function SignUpButtonFormField({
  id,
  label,
  placeholder,
  warning,
  showPasswordToggle = false,
  readOnly = false,
  register,
  errors,
  dirtyFields,
}: SignUpButtonFormFieldProps) {
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
      <div className="flex w-full gap-[14px]">
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
        <Button type="button" color="darkGray" variant="checkAvailability" radius={10}>
          중복확인
        </Button>
      </div>
    </FormField>
  );
}

export default SignUpButtonFormField;
