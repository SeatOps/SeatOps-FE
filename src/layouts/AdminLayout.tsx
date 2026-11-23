import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';

function AdminLayout() {
  return (
    <div className="min-w-0 flex flex-col flex-1">
      <AdminHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
