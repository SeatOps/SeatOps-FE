function ClassCardHeadMobile() {
  return (
    <div className="md:hidden block w-[79px] border-r border-gray-30 mr-[12px]">
      <div className="w-full h-[59px] flex flex-col justify-center items-center">
        <p className="typo-mmm-semibold text-gray-80">18:50</p>
        <p className="typo-ss-medium text-gray-50">~20:00</p>
      </div>
      <div className="bg-gray-30 w-full h-[23px] flex gap-[5px] justify-center items-center">
        <p className="typo-sm-bold text-blue">100</p>
        <div className="w-[0.5px] h-[7px]"></div>
        <p className="typo-sm-bold text-gray-50">150</p>
      </div>
    </div>
  );
}

export default ClassCardHeadMobile;
