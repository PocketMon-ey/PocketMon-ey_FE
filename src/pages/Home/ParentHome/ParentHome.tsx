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
import TitleWebp from '../../../assets/images/title.webp';

const ParentHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeTitleContainer>
        <MainTitleContainer>
          <HomeImageContainer
            src={TitleWebp}
            alt="pocketmoney"
          ></HomeImageContainer>
        </MainTitleContainer>
      </HomeTitleContainer>
      <CardGridContainer>
        <HomeCardContainer onClick={() => navigate('/parent/ready')} id={1}>
          <MainTitleContainer>송금</MainTitleContainer>
          <SubTitleContainer>
            # 정기 용돈 <br /> # 송금
          </SubTitleContainer>
        </HomeCardContainer>

        <HomeCardContainer id={2} onClick={() => navigate('/parent/ready')}>
          <MainTitleContainer>미션</MainTitleContainer>
          <SubTitleContainer>
            # 심부름 <br /> # 목표
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={3} onClick={() => navigate('/parent/loan/list')}>
          <MainTitleContainer>대출</MainTitleContainer>
          <SubTitleContainer>
            # 대출 관리
            <br /> # 급한 돈
          </SubTitleContainer>
        </HomeCardContainer>
        <HomeCardContainer id={4} onClick={() => navigate('/parent/ready')}>
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

export default ParentHome;
