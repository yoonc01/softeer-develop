import React, { useState } from 'react';
import modalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';

function CommandInputModal({ closeCommandModal }) {
  const [inputCommand, setInputCommand] = useState('');
  const handleInputText = e => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50);
    }
    setInputCommand(e.target.value);
  };
  const handleCommand = () => {
    console.log(inputCommand);
    closeCommandModal();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-neutral-black z-[100]">
      <div className="bg-neutral-white w-[800px] py-1500 flex flex-col items-center relative rounded-[20px]">
        <button
          onClick={closeCommandModal}
          className="absolute top-[29px] right-[29px]"
        >
          <img src={modalClose} alt="Close" />
        </button>
        <span className="text-detail-1-bold text-neutral-black mb-900">
          일일 한줄 기대평 이벤트
        </span>
        <textarea
          placeholder={`월드컵을 하면서 알게 된 캐스퍼 EV의 기능에 대한\n센스있는 한줄 기대평을 작성해보아요.`}
          onChange={handleInputText}
          maxLength="50"
          className="w-[440px] h-[200px] p-500 mb-700 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder-neutral-500 bg-neutral-50 rounded-lg resize-none"
        ></textarea>
        <span className="absolute top-[55%] left-[70%] text-detail-3-regular text-neutral-500">{`${inputCommand.length}/50`}</span>
        <p className="mb-700 text-neutral-500 text-detail-3-regular">
          기대평을 등록한 후에는 다시 수정할 수 없어요!
        </p>

        {inputCommand != '' ? (
          <button
            onClick={handleCommand}
            className="flex items-center justify-center rounded-full px-1400 py-200 bg-primary-blue"
          >
            <span className="text-neutral-white text-body-3-regular">확인</span>
          </button>
        ) : (
          <button className="flex items-center justify-center rounded-full cursor-default px-1400 py-200 bg-primary-blue opacity-30">
            <span className="text-neutral-white text-body-3-regular">확인</span>
          </button>
        )}
      </div>
    </div>
  );
}

CommandInputModal.propTypes = {
  closeCommandModal: PropTypes.func.isRequired,
};

export default CommandInputModal;