import type { ReactNode } from 'react';

interface AdminTableSquareProps {
  size: string;
  children: ReactNode;
}

function AdminTableSquare({ size, children }: AdminTableSquareProps) {
  return (
    <div style={{ flexBasis: size }} className="flex justify-center items-center">
      {children}
    </div>
  );
}

export default AdminTableSquare;
