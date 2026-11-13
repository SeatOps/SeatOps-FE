import type { ReactNode } from 'react';

interface AdminTableProps {
  children: ReactNode;
}

function AdminTable({ children }: AdminTableProps) {
  return (
    <section className="bg-[#fcfcfc] rounded-[10px] border border-gray-30 shadow-[0_0_10px_0_rgba(0,0,0,0.10)] px-[13px] w-full h-[1000px]">
      {children}
    </section>
  );
}

export default AdminTable;
