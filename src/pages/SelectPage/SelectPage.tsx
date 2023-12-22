import React from 'react';

// import TitlePng from '../../assets/images/title.png';
// import TitleJPG from '../../assets/images/title.jpg';

import {
  CContainer,
  CardContainer,
  ChildCardContainer,
  EContainer,
  ImageContainer,
  KContainer,
  MainTitleContainer,
  OContainer,
  PContainer,
  ParentCardContainer,
  SubTitleContainer,
  TContainer,
  TextContainer,
  TitleContainer,
} from './styled';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/common/Title/Title';
import { StyledTitleDiv } from '../ParentHome/styled';
import { theme } from '../../styles';

const SelectPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TitleContainer>
        <SubTitleContainer>내 손안에 금융 도우미</SubTitleContainer>
        <MainTitleContainer>
          <StyledTitleDiv>
            <PContainer>p</PContainer>
            <OContainer>o</OContainer>
            <CContainer>c</CContainer>
            <KContainer>k</KContainer>
            <EContainer>e</EContainer>
            <TContainer>t</TContainer>
          </StyledTitleDiv>
          <StyledTitleDiv>money</StyledTitleDiv>
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
