import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout() {
  return (
    <div className='h-dvh flex'>
      <Sidebar/>
      <div className='min-w-0 flex flex-col flex-1'>
        <Header/>
        <main>  
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
