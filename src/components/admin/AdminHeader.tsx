import AdminHeaderItem from './AdminHeader/AdminHeaderItem';
import { useLocation } from 'react-router-dom';

export interface AdminHeaderItemType {
  name: string;
  text: string;
  dropdown: boolean;
  link?: string;
  dropdownItems?: {
    name: string;
    text: string;
    link: string;
  }[];
}

const itemList: AdminHeaderItemType[] = [
  {
    name: 'reservations',
    text: '좌석 예약',
    dropdown: false,
    link: '/admin/reservations',
  },
  {
    name: 'lectures',
    text: '강의 정보',
    dropdown: true,
    dropdownItems: [
      {
        name: 'regist',
        text: '과목명/강사/강의실 등록',
        link: '/admin/lectures/regist',
      },
      {
        name: 'edit',
        text: '과목명/강사/강의실 변경',
        link: '/admin/lectures/edit',
      },
    ],
  },
  {
    name: 'students',
    text: '학생 관리',
    dropdown: true,
    dropdownItems: [
      {
        name: 'all',
        text: '전체 학생 조회',
        link: '/admin/students/all',
      },
      {
        name: 'approval',
        text: '미승인 학생 조회',
        link: '/admin/students/approval',
      },
    ],
  },
];

function AdminHeader() {
  const { pathname } = useLocation(); // 예: "/admin/students"
  const secondSegment = pathname.split('/')[2] as string; // "students"
  const thirdSegment = pathname.split('/')[3] as string;

  return (
    <ul className="pl-[85px] flex w-full border-b-[1.5px] border-gray-30 h-[71px]">
      {itemList.map((item) => {
        return (
          <AdminHeaderItem
            key={item.name}
            item={item}
            secondSegment={secondSegment}
            thirdSegment={thirdSegment}
          />
        );
      })}
    </ul>
  );
}

export default AdminHeader;
