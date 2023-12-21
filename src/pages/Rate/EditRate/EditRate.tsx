import React from 'react';
import { EditButtonContainer, RateHeader } from './styled';
import { TitleHeader } from '../../../components/feature';
import { BigButton, Header } from '../../../components/common';
import * as S from '../../../components/feature/TitleHeader/styled';
import { useNavigate } from 'react-router-dom';

const EditRate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header headerTitle="금리 조정" />
      <div>
        <TitleHeader
          title="가족금리 조정하기"
          firstS="가족금리는 자녀 모두에게 적용되는 금리예요"
          secondS=""
        ></TitleHeader>
        <EditButtonContainer
          onClick={() => navigate('/parent/loan/rate/family')}
        >
          <BigButton text="조정하기" />
        </EditButtonContainer>
      </div>

      <div>
        <TitleHeader
          title="우대금리 조정하기"
          firstS="김지훈(아이)에게 적용되는"
          secondS="우대금리를 조정할 수 있어요"
        ></TitleHeader>
        <EditButtonContainer
          onClick={() => navigate('/parent/loan/rate/prime')}
        >
          <BigButton text="조정하기" />
        </EditButtonContainer>
      </div>
    </div>
  );
};

export default EditRate;
