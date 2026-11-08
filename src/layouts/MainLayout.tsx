import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <header>main layout</header>
      <Outlet />
    </div>
  );
}

export default MainLayout;
