interface ClassCardTitleProps {
  title: string;
}

function ClassCardTitle({ title }: ClassCardTitleProps) {
  return <h3 className="typo-mm-semibold md:typo-xl-semibold text-gray-80">{title}</h3>;
}

export default ClassCardTitle;
