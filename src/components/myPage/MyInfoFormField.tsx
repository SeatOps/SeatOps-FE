import FormField from '../common/Form/FormField';
import Input from '../common/Form/Input';
import type { FieldErrors, FormState, UseFormRegister } from 'react-hook-form';
import type { SampleFormValues } from '../../lib/shcemas/sample';

type FieldName = keyof SampleFormValues;

interface MyInfoFormFieldProps {
  id: FieldName;
  label: string;
  placeholder: string;
  warning?: string;
  eye?: boolean;
  readOnly?: boolean;
  register: UseFormRegister<SampleFormValues>;
  errors: FieldErrors<SampleFormValues>;
  dirtyFields: FormState<SampleFormValues>['dirtyFields'];
}

function MyInfoFormField({
  id,
  label,
  placeholder,
  warning,
  eye = false,
  readOnly = false,
  register,
  errors,
  dirtyFields,
}: MyInfoFormFieldProps) {
  const error = errors[id]?.message;
  const isDirty = !!dirtyFields[id];

  return (
    <FormField id={id} label={label} warning={warning} error={error} isDirty={isDirty}>
      <Input
        id={id}
        placeholder={placeholder}
        warning={warning}
        eye={eye}
        readOnly={readOnly}
        registration={register(id)}
        error={error}
        isDirty={isDirty}
      />
    </FormField>
  );
}

export default MyInfoFormField;
