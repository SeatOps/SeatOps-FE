import { Link } from 'react-router-dom';
import type { AdminHeaderItemType } from '../AdminHeader';
import { useState } from 'react';
import AdminHeaderDropdownItem from './AdminHeaderDropdownItem';

interface AdminHeaderItemProps {
  item: AdminHeaderItemType;
  secondSegment: string;
  thirdSegment: string;
}

const headerItemClass =
  'relative mx-[26.5px] px-[48.5px] pb-[32px] pt-[10px] text-center typo-ll-semibold  text-gray-60';
const activeHeaderClass = 'shadow-[inset_0_-4px_0_#01AEB0]';
const dropdownClass =
  'absolute z-[999] inline-flex items-center justify-center gap-[32px] border border-gray-30 bg-[#FCFCFC] p-[30px]  text-gray-50 shadow-[0_0_10px_0_rgba(0,0,0,0.10)]';

function AdminHeaderItem({ item, secondSegment, thirdSegment }: AdminHeaderItemProps) {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const openDropdown = () => {
    setDropdown(true);
  };
  const closeDropdown = () => {
    setDropdown(false);
  };

  if (item.dropdown) {
    return (
      <li
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className={`${headerItemClass} ${secondSegment === item.name ? activeHeaderClass : ''}`}
      >
        {item.text}
        {dropdown === true && (
          <section
            className={`${dropdownClass} top-full left-0 max-h-[84px] w-max whitespace-nowrap`}
          >
            {item.dropdownItems?.map((item) => {
              return (
                <AdminHeaderDropdownItem key={item.name} item={item} thirdSegment={thirdSegment} />
              );
            })}
          </section>
        )}
      </li>
    );
  } else {
    return (
      <li className={`${headerItemClass} ${secondSegment === item.name ? activeHeaderClass : ''}`}>
        <Link to={item.link || ''}> {item.text}</Link>
      </li>
    );
  }
}

export default AdminHeaderItem;
