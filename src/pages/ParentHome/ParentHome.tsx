import React from 'react';
import {
  CardGridContainer,
  HomeCardContainer,
  HomeImageContainer,
  HomeTitleContainer,
  MainTitleContainer,
  SubTitleContainer,
} from '../styled';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/common/Title/Title';
import { Header } from '../../components/common';
import { StyledTitleDiv } from './styled';
import {
  CContainer,
  EContainer,
  KContainer,
  OContainer,
  PContainer,
  TContainer,
} from '../SelectPage/styled';
import { theme } from '../../styles';
import Balance from '../../components/common/Balance/Balance';

const ParentHome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: '400px' }}>
      <Header headerTitle="" />
      <HomeTitleContainer>
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
      </HomeTitleContainer>
      <Balance id={1} />
      <CardGridContainer>
        <HomeCardContainer onClick={() => navigate('/parent/ready')} id={1}>
          <MainTitleContainer>송금</MainTitleContainer>
          <div style={{ color: '#FFBC00', fontSize: '42px' }}>"</div>
          <SubTitleContainer>
            # 정기 용돈 <br /> # 송금
          </SubTitleContainer>
        </HomeCardContainer>

        <HomeCardContainer
          id={2}
          onClick={() => {
            if (window.webkit) {
              window.webkit.messageHandlers.PocketMoney.postMessage(
                // 유저 id, isChild
                '1 0',
              );
            } else {
              navigate('/child/ready');
            }
          }}
        >
          <MainTitleContainer>미션</MainTitleContainer>
          <div style={{ color: theme.colors.primary_pink, fontSize: '42px' }}>
            "
          </div>
          <SubTitleContainer>
            # 심부름 <br /> # 목표
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={3} onClick={() => navigate('/parent/loan/list')}>
          <MainTitleContainer>대출</MainTitleContainer>
          <div style={{ color: theme.colors.primary_green, fontSize: '42px' }}>
            "
          </div>
          <SubTitleContainer>
            # 대출 관리
            <br /> # 급한 돈
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={4} onClick={() => navigate('/parent/ready')}>
          <MainTitleContainer>오늘의</MainTitleContainer>
          <MainTitleContainer>퀴즈</MainTitleContainer>
          <SubTitleContainer>
            # 아침 10시
            <br /> # 금융 상식
          </SubTitleContainer>
        </HomeCardContainer>
      </CardGridContainer>
    </div>
  );
};

export default ParentHome;
