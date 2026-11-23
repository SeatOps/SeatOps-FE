import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import LectureRegist from '../pages/admin/LectureRegist';
import Reservation from '../pages/admin/Reservation';
import LectureEdit from '../pages/admin/LectureEdit';
import StudentsAll from '../pages/admin/StudentsAll';
import StudentsApproval from '../pages/admin/StudentsApproval';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'reservations',
            element: <Reservation />,
          },
          {
            path: 'lectures/regist',
            element: <LectureRegist />,
          },
          {
            path: 'lectures/edit',
            element: <LectureEdit />,
          },
          {
            path: 'students/all',
            element: <StudentsAll />,
          },
          {
            path: 'students/approval',
            element: <StudentsApproval />,
          },
        ],
      },
    ],
  },
]);
