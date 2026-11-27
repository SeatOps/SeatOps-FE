import type { ReactNode } from 'react';

interface AdminPageTitleProps {
  children: ReactNode;
  title: string;
}

function AdminPageTitle({ children, title }: AdminPageTitleProps) {
  return (
    <div className="flex items-center h-[128px]">
      <p className="typo-lll-semibold text-green-80 p-[10px] mr-auto">{title}</p>
      {children}
    </div>
  );
}

export default AdminPageTitle;
