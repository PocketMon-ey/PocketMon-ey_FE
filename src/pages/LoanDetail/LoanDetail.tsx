import React from 'react';
import { ContentBackground } from '../../components/feature';
import { BalanceContainer, NextSendAlarm, ProgressBackground } from './styled';
import { theme } from '../../styles';
import { Progress } from 'antd';
import { BigButton } from '../../components/common';
import { useLocation, useParams } from 'react-router-dom';

const ChildLoanDetail = () => {
  const path = useLocation().pathname;
  const params = useParams();
  return (
    <>
      <ProgressBackground>
        <div>현재 남은 대출금</div>
        <BalanceContainer>99,900원</BalanceContainer>
        <NextSendAlarm>다음 납입일은 2024.01.15 입니다</NextSendAlarm>
        <Progress
          percent={65}
          showInfo={false}
          strokeColor={theme.colors.primary_purple}
          size={['default', 20]}
        ></Progress>
        <div style={{ marginTop: '5px', color: theme.colors.primary_purple }}>
          앞으로 3번만 더 내면 완료!
        </div>
      </ProgressBackground>
      <ContentBackground></ContentBackground>
      {path.includes('child') ? <BigButton text="납입" /> : <></>}
    </>
  );
};

export default ChildLoanDetail;
