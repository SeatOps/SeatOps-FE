import type { ReactNode } from 'react';

interface CardButtonsProps {
  children: ReactNode;
}

function ClassCardButtons({ children }: CardButtonsProps) {
  return (
    <div className="md:flex hidden flex-col gap-[10px] w-[437px] justify-center items-center px-[83.5px]">
      {children}
    </div>
  );
}

export default ClassCardButtons;
