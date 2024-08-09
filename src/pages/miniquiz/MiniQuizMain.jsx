import React, { useState } from 'react';
import useMiniQuiz from '@/pages/miniquiz/miniquizhooks/useMiniQuiz';
import ClickBox from '@/pages/miniquiz/ClickBox';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import LoadingQuiz from '@/pages/miniquiz/LoadingQuiz';
import { useNavigate } from 'react-router-dom';
import NoQuiz from '@/pages/miniquiz/NoQuiz';
import '@/styles/global.css';

function MiniQuiz() {
  const navigate = useNavigate();
  const { loading, error, code, data, shuffledQuizQuestion } = useMiniQuiz();
  const [isChosen, setIsChosen] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <LoadingQuiz />;
  } else if (code === 'NO_QUIZ_CONTENT') {
    return <NoQuiz />;
  } else if (isSubmit) {
    navigate('/event/miniQuizResult', {
      state: { quizId: data.quizId, isChosen: isChosen },
    });
  }

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
      <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
        월드컵 일일 미니퀴즈
      </div>
      <div className="text-center text-body-1-bold mb-2000">
        {data.quizDescription}
      </div>
      <div className="grid grid-cols-2 gap-x-600 gap-y-600 mb-2000">
        {shuffledQuizQuestion.map(item => {
          const id = Number(item[0]);
          const value = item[1];
          return (
            <ClickBox
              id={id}
              isChosen={isChosen}
              value={value}
              onClick={() => setIsChosen(id)}
              key={id}
            />
          );
        })}
      </div>
      <BluePurpleButton
        value="제출"
        onClickFunc={() => setIsSubmit(true)}
        styles="px-3000 py-500 text-detail-1-regular"
      />
    </div>
  );
}

export default MiniQuiz;