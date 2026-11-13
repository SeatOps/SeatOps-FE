import type { ReactNode } from 'react';

interface AdminTableHeadProps {
  children: ReactNode;
}

function AdminTableHead({ children }: AdminTableHeadProps) {
  return (
    <div className="flex typo-ll-bold text-gray-70 h-[109px] w-full border-b border-gray-30">
      {children}
    </div>
  );
}

export default AdminTableHead;
