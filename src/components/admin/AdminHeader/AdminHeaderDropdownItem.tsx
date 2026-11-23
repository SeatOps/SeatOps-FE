import { Link } from 'react-router-dom';

const underlineClass =
  'underline decoration-solid [text-decoration-skip-ink:auto] [text-decoration-thickness:5%] [text-underline-offset:25%] [text-underline-position:from-font]';
const hoverUnderlineClass =
  'hover:underline hover:decoration-solid hover:[text-decoration-skip-ink:auto] hover:[text-decoration-thickness:5%] hover:[text-underline-offset:25%] hover:[text-underline-position:from-font]';

interface AdminHeaderDropdownItemProps {
  item: {
    name: string;
    text: string;
    link: string;
  };
  thirdSegment: string;
}

function AdminHeaderDropdownItem({ item, thirdSegment }: AdminHeaderDropdownItemProps) {
  return (
    <Link
      to={item.link}
      className={thirdSegment === item.name ? underlineClass : hoverUnderlineClass}
    >
      {item.text}
    </Link>
  );
}

export default AdminHeaderDropdownItem;
