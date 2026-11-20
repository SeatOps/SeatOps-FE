import { NavLink } from 'react-router-dom'
import SidebarHome from '../assets/icon/sidebar/sidebar-home.svg'
import SidebarSchedule from '../assets/icon/sidebar/sidebar-schedule.svg'
import SidebarMyInfo from '../assets/icon/sidebar/sidebar-myInfo.svg'
import SidebarAdmin from '../assets/icon/sidebar/sidebar-admin.svg'

const sidebarItems = [
  { path: "/", icon: SidebarHome, label: "홈", alt: "사이드바 홈 이미지"},
  { path: "/schedule", icon: SidebarSchedule, label: "일정", alt: "사이드바 일정 이미지"},
  { path: "/myinfo", icon: SidebarMyInfo, label: "내 정보", alt: "사이드바 내 정보 이미지"},
  { path: "/admin", icon: SidebarAdmin, label: "관리자", alt: "사이드바 관리자 이미지"}
]

function Sidebar() {
  return ( 
    <aside className="w-[114px] flex flex-col items-center justify-center shrink-0 bg-green-10">
      {sidebarItems.map(({path, icon, label, alt}) => (
        <NavLink
          to={path}
          className={({isActive}) => (
            `w-full h-[100px] flex flex-col gap-[10px] items-center justify-center ${isActive ? "bg-green-50" : ""}` 
          )}
        >
          <img src={icon} alt={alt}/>
          <p className="text-gray-0 typo-md-bold">{label}</p>
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar