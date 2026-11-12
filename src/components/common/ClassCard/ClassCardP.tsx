const contentStyles = {
  adminSeat: 'typo-sm-medium md:typo-mm-semibold text-gray-50 mb-[5px]',
  adminInfo: 'typo-sm-bold md:typo-lg-semibold text-gray-50 mb-[5px]',
  info: 'typo-ss-semibold md:typo-lll-semibold text-gray-50 md:mb-[5px]',
  period: 'typo-sm-medium md:typo-lll-semibold text-[#2C8FFF] mt-[8px] md:mt-[25px]',
} as const;

interface ClassCardPProps {
  variant: keyof typeof contentStyles;
  text: string;
}

function ClassCardP({ variant, text }: ClassCardPProps) {
  return <p className={contentStyles[variant]}>{text}</p>;
}

export default ClassCardP;
