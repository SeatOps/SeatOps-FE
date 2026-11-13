import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function ClassCard({ children }: CardProps) {
  return (
    <section className="overflow-hidden flex justify-between h-[82px] md:h-[220px] w-full rounded-[20px] border border-gray-30 bg-[#FCFCFC] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] md:mb-[40px] mb-[13px]">
      {children}
    </section>
  );
}

export default ClassCard;
