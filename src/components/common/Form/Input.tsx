import { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import eyeIcon from '../../../assets/eye.svg';
import eyeOffIcon from '../../../assets/eye-off.svg';

interface InputProps {
  id: string;
  placeholder: string;
  warning?: string;
  eye?: boolean;
  readOnly?: boolean;
  registration: UseFormRegisterReturn;
  error?: string;
  isDirty: boolean;
}

function Input({
  id,
  placeholder,
  warning,
  eye = false,
  readOnly = false,
  registration,
  error,
  isDirty,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const message = error ?? warning;
  return (
    <div
      className={`flex w-full md:h-[66px] h-[53px] items-center justify-between rounded-[5px] border px-[20px] ${readOnly ? 'bg-gray-10' : 'bg-gray-0'} ${error ? 'border-red' : isDirty ? 'border-blue' : 'border-gray-50'}`}
    >
      <input
        {...registration}
        id={id}
        readOnly={readOnly}
        type={eye && !isVisible ? 'password' : 'text'}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={message ? `${id}-message` : undefined}
        className="min-w-0 flex-1 bg-transparent typo-md-medium text-gray-80 outline-none placeholder:text-gray-30"
      />

      {eye && (
        <button
          type="button"
          onClick={() => setIsVisible((current) => !current)}
          aria-label={isVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
          aria-pressed={isVisible}
          className="ml-2 flex h-[15px] w-[22px] shrink-0 items-center justify-center"
        >
          <img src={isVisible ? eyeOffIcon : eyeIcon} alt="" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default Input;
