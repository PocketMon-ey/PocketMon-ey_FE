import React from 'react';

// import TitlePng from '../../assets/images/title.png';
import TitleWebp from '../../../src/assets/images/title.webp';

import {
  CardContainer,
  ChildCardContainer,
  ImageContainer,
  MainTitleContainer,
  ParentCardContainer,
  SubTitleContainer,
  TextContainer,
  TitleContainer,
} from './styled';
import { useNavigate } from 'react-router-dom';

const SelectPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TitleContainer>
        <SubTitleContainer>내 손안에 금융 도우미</SubTitleContainer>
        <MainTitleContainer>
          <ImageContainer src={TitleWebp} alt="pocketmoney"></ImageContainer>
        </MainTitleContainer>
      </TitleContainer>
      <CardContainer>
        <div onClick={() => navigate('/parent/home')}>
          <ParentCardContainer>
            <TextContainer>보호자</TextContainer>
          </ParentCardContainer>
        </div>
        <div onClick={() => navigate('/child/home')}>
          <ChildCardContainer>
            <TextContainer>아이</TextContainer>
          </ChildCardContainer>
        </div>
      </CardContainer>
    </>
  );
};

export default SelectPage;
