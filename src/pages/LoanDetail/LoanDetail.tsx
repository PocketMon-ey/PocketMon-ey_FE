import React, { useEffect, useState } from 'react';
import { ContentBackground } from '../../components/feature';
import { BalanceContainer, NextSendAlarm, ProgressBackground } from './styled';
import { theme } from '../../styles';
import { Progress } from 'antd';
import { BigButton, Header } from '../../components/common';
import { useLocation, useParams } from 'react-router-dom';
import {
  DetailResponse,
  getDetail,
} from '../../core/api/loan/useLoanDetailGet';
import { useLoanService } from '../../core/loanService';

const ChildLoanDetail = () => {
  const path = useLocation().pathname;
  const params = useParams();
  const { addComma } = useLoanService();
  const [data, setData] = useState<DetailResponse>();
  useEffect(() => {
    if (params.loanId) {
      getDetail(Number(params.loanId)).then((response) => {
        console.log(response);
        setData(response);
      });
    }
  }, []);
  const calPercent = (repaymentCnt: number, period: number) => {
    return (repaymentCnt / period) * 100;
  };
  return (
    <>
      {data && (
        <>
          <Header headerTitle="대출 상세" />
          <ProgressBackground>
            <div>현재 남은 대출금</div>
            <BalanceContainer>{addComma(data?.price)}원</BalanceContainer>
            <NextSendAlarm>
              다음 납입일은 2024.01.{data?.startDate.split('.')[2]} 입니다
            </NextSendAlarm>
            <Progress
              percent={calPercent(data?.repaymentCnt, data?.period)}
              showInfo={false}
              strokeColor={theme.colors.primary_purple}
              size={['default', 20]}
            ></Progress>
            <div
              style={{ marginTop: '5px', color: theme.colors.primary_purple }}
            >
              앞으로 {data?.period - data?.repaymentCnt}번만 더 내면 완료!
            </div>
          </ProgressBackground>
          <ContentBackground />
          {path.includes('child') && <BigButton text="납입" />}
        </>
      )}
    </>
  );
};

export default ChildLoanDetail;
