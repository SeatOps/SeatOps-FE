import { type ComponentProps } from 'react';

const buttonColors = {
  mint: 'bg-green-80 text-gray-0',
  gray: 'bg-gray-30 text-gray-0',
  darkGray: 'bg-gray-50 text-gray-0',
  whiteMint: 'border-2 border-green-80 bg-gray-0 text-green-80',
  whiteGray: 'border-2 border-gray-60 bg-gray-0 text-gray-60',
} as const;

const buttonSizes = {
  signUp: 'w-[100%] h-[75px]',
  reservation: 'w-[100%] h-[73px]',
  userInfo: 'w-[100%] h-[54px]',
  adminButton: 'w-[100%] h-[37px]',
  phoneBottom: 'w-[100%] h-[98px]',
  phoneCalendarBottom: 'w-[100%] h-[63px]',
  phoneButton: 'w-[100%] h-[33px]',
  icon: 'w-[33px] h-[33px]',
} as const;

const buttonRadius = {
  0: '',
  10: 'rounded-[10px]',
  50: 'rounded-[50px]',
} as const;

interface ButtonProps extends ComponentProps<'button'> {
  color: keyof typeof buttonColors;
  variant: keyof typeof buttonSizes;
  radius: 0 | 10 | 50;
}

function Button({ color, variant, radius, children, ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center ${buttonRadius[radius]} ${buttonColors[color]} ${buttonSizes[variant]}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
