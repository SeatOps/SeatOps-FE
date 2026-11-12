import type { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
}

function ClassCardContent({ children }: CardContentProps) {
  return <div className="flex flex-col mr-auto justify-center">{children}</div>;
}

export default ClassCardContent;
