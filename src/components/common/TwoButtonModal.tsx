interface OneButtonModalProps {
  closeModal: () => void;
  activeModal: () => void;
  noneActiveModal: () => void;
  text: string;
}

function TwoButtonModal({ closeModal, activeModal, noneActiveModal, text }: OneButtonModalProps) {
  return (
    <div className="z-999 bg-black/50 fixed top-0 left-0 w-screen h-screen">
      <section
        className="rounded-[10px] px-1 border border-blue bg-[#FCFCFC] h-30 z-1000 w-[288px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[82px] flex justify-center items-center text-gray-60 text-14 font-bold">
          {text}
        </div>
        <div className="flex">
          <button
            onClick={activeModal}
            className="w-full h-[37px] border-t border-gray-50 text-gray-70 text-14 font-bold"
          >
            확인
          </button>
          <button
            onClick={noneActiveModal}
            className="
            relative w-full h-[37px]
            border-t border-gray-50
            text-blue text-14 font-bold
            before:content-['']
            before:absolute
            before:left-0
            before:top-0
            before:bottom-0.5
            before:w-px
            before:bg-gray-50
        "
          >
            확인
          </button>
        </div>
      </section>
    </div>
  );
}

export default TwoButtonModal;
