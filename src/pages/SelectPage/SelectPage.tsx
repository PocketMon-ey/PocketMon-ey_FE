import React from 'react';

// import TitlePng from '../../assets/images/title.png';
// import TitleJPG from '../../assets/images/title.jpg';

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
import Title from '../../components/common/Title/Title';

const SelectPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TitleContainer>
        <SubTitleContainer>내 손안에 금융 도우미</SubTitleContainer>
        <MainTitleContainer>
          <Title />
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
