import type { ReactNode } from 'react';

interface AdminTableRowProps {
  children: ReactNode;
}

function AdminTableRow({ children }: AdminTableRowProps) {
  return (
    <div className="flex text-gray-60 typo-ll-semibold h-[67px] w-full border-b border-gray-30">
      {children}
    </div>
  );
}

export default AdminTableRow;
