import React, { useContext, useState } from 'react';
import {
  CardGridContainer,
  HomeCardContainer,
  HomeImageContainer,
  HomeTitleContainer,
  MainTitleContainer,
  SubTitleContainer,
} from '../styled';
import { useNavigate } from 'react-router-dom';
// import TitleWebp from '../../../assets/images/title.webp';
import TitleJPG from '../../../assets/images/title.jpg';
const ChildHome = () => {
  const navigate = useNavigate();

  // '/user/{userId}'에 요청 후 데이터 useState
  return (
    <div>
      <HomeTitleContainer>
        <MainTitleContainer>
          <HomeImageContainer
            src={TitleJPG}
            alt="pocketmoney"
          ></HomeImageContainer>
        </MainTitleContainer>
      </HomeTitleContainer>
      <CardGridContainer>
        <HomeCardContainer onClick={() => navigate('/child/ready')} id={1}>
          <MainTitleContainer>송금</MainTitleContainer>
          <SubTitleContainer>
            # 대출 갚기 <br /> # 송금
          </SubTitleContainer>
        </HomeCardContainer>

        <HomeCardContainer id={2} onClick={() => navigate('/child/ready')}>
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
        <HomeCardContainer id={4} onClick={() => navigate('/child/ready')}>
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
