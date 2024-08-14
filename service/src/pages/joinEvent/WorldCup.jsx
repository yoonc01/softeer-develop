import React, { useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import worldCupIntro1 from '@/assets/images/worldCupIntro1.svg';
import worldCupIntro2 from '@/assets/images/worldCupIntro2.svg';
import worldCupIntro3 from '@/assets/images/worldCupIntro3.svg';
import { useNavigate } from 'react-router-dom';

function WorldCup() {
  const navigate = useNavigate();

  const gotoWorldCup = useCallback(() => {
    navigate('/event/worldCup');
  }, []);
  return (
    <>
      <div className="px-3000 pt-2000 pb-500">
        <div className="flex gap-2000">
          <div className="w-[610px]">
            <div className="space-y-800">
              <div className="text-primary-blue text-detail-1-bold">
                Event1. 자동차 얻기
              </div>
              <div className="text-heading-3-bold">
                운전 중 피하고 싶은 상황 월드컵
              </div>
            </div>
            <div className="space-y-1200">
              <div className="whitespace-pre-line text-detail-2-medium">
                {`운전 중 피하고 싶은 상황을 고르면 나에게 딱 맞는 캐스퍼 EV 옵션을
                추천받고 차 아이템은 한번 획득하면 응모에 여러번 참여해도 남아있어요.`}
              </div>
              <BlueButton
                value="이벤트 참여하기"
                styles="px-2000 py-400 text-detail-2-medium"
                onClickFunc={gotoWorldCup}
              />
            </div>
          </div>
          <div className="relative w-[784px]">
            {/*아래 div 두 개는 svg 파일에 포함된 밑줄 삭제용입니다.*/}
            <div className="absolute top-[347px] left-[70px] bg-white w-[300px] h-[3px] origin-bottom-left -rotate-[15deg] z-30"></div>
            <div className="absolute top-[350px] left-[311px] bg-white w-[300px] h-[3px] origin-bottom-right -rotate-[-15deg] z-30"></div>
            <img
              className="absolute top-[51px] left-[6px] z-0"
              src={worldCupIntro1}
              alt="출차 시 고급승용차에 둘러 싸이기"
            ></img>
            <img
              className="absolute top-[25px] left-[206px] z-50"
              src={worldCupIntro2}
              alt="산 중턱에서 전기차 배터리 방전되기"
            ></img>
            <img
              className="absolute top-[57px] left-[410px] z-0"
              src={worldCupIntro3}
              alt="골목에서 천천히 걸어가는 보행자 만나기"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldCup;