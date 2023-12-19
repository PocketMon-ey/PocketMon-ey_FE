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
import Title from '../../../assets/images/title.png';

const ChildHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeTitleContainer>
        <MainTitleContainer>
          <HomeImageContainer
            src={Title}
            alt="pocketmoney"
          ></HomeImageContainer>
        </MainTitleContainer>
      </HomeTitleContainer>
      <CardGridContainer>
        <HomeCardContainer onClick={() => navigate('/ready')} id={1}>
          <MainTitleContainer>송금</MainTitleContainer>
          <SubTitleContainer>
            # 대출 갚기 <br /> # 송금
          </SubTitleContainer>
        </HomeCardContainer>

        <HomeCardContainer id={2} onClick={() => navigate('/ready')}>
          <MainTitleContainer>미션</MainTitleContainer>
          <SubTitleContainer>
            # 심부름 <br /> # 목표
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={3} onClick={() => navigate('/child/loan/list')}>
          <MainTitleContainer>대출</MainTitleContainer>
          <SubTitleContainer>
            # 대출 요청
            <br /> # 급한 돈
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={4} onClick={() => navigate('/ready')}>
          <MainTitleContainer>오늘의 퀴즈</MainTitleContainer>
          <SubTitleContainer>
            # 아침 10시
            <br /> # 금융 상식
          </SubTitleContainer>
        </HomeCardContainer>
      </CardGridContainer>
    </div>
  );
};

export default ChildHome;
