import type { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  varient?: 'signUp' | 'nomal';
  id: string;
  label: string;
  warning?: string;
  error?: string;
  isDirty: boolean;
}

function FormField({
  children,
  varient = 'nomal',
  id,
  label,
  warning,
  error,
  isDirty,
}: FormFieldProps) {
  const message = error ?? warning;

  return (
    <div className={`flex flex-col w-full max-w-full ${varient === 'nomal' ? 'md:flex-row' : ''}`}>
      <label
        htmlFor={id}
        className={`flex w-full items-center text-gray-70 typo-mm-semibold mb-[10px] ${varient === 'nomal' ? 'md:mb-0 md:w-[178px] md:text-gray-60 md:h-[52px] md:p-[10px]' : 'md:typo-lg-semibold  '}`}
      >
        {label}
      </label>

      <div className="flex flex-1 flex-col gap-[5px] md:h-[99px]">
        {children}
        {message && (
          <div className="px-[10px]">
            <p
              id={`${id}-message`}
              role={error ? 'alert' : undefined}
              className={`typo-ss-medium ${error ? 'text-red' : isDirty ? 'text-blue' : 'text-gray-60'}`}
            >
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormField;
