import { useState } from 'react';

interface Modal {
  openModal: () => void;
  closeModal: () => void;
  activeModal: () => void;
  noneActiveModal: () => void;
  isModal: boolean;
}

function useModal(activeFunc?: () => void, noneActiveFunc?: () => void): Modal {
  const [isModal, setIsModal] = useState<boolean>(false);

  //모달 여는 함수
  const openModal = (): void => {
    setIsModal(true);
  };

  //모달 닫는 함수
  const closeModal = () => {
    setIsModal(false);
  };

  //필요시 사용
  const noneActiveModal = () => {
    setIsModal(false);
    noneActiveFunc?.();
  };

  //모달이 실행될 때 함수
  const activeModal = () => {
    setIsModal(false);
    activeFunc?.();
  };

  return { openModal, closeModal, activeModal, noneActiveModal, isModal };
}

export default useModal;
