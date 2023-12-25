import React, { useEffect, useState } from 'react';
import { ContentBackground } from '../../components/feature';
import { BalanceContainer, NextSendAlarm, ProgressBackground } from './styled';
import { theme } from '../../styles';
import { Progress } from 'antd';
import { BigButton, Header } from '../../components/common';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  DetailResponse,
  getDetail,
} from '../../core/api/loan/useLoanDetailGet';
import { useLoanService } from '../../core/loanService';
import { postLoan } from '../../core/api/loan/useLoanPost';
import {
  LoanPutResponse,
  loanRepayment,
} from '../../core/api/loan/useRepaymentPost';
import { useQuery } from '@tanstack/react-query';
import { loanServiceAxiosInstance } from '../../core/api/axios';
import swal from 'sweetalert';

const ChildLoanDetail = () => {
  const path = useLocation().pathname;
  const params = useParams();
  const navigate = useNavigate();
  const { addComma } = useLoanService();

  const { data } = useQuery<DetailResponse>({
    queryKey: ['getLoanDetail'],
    queryFn: () => getDetail(Number(params.loanId)),
    refetchOnReconnect: true,
  });
  const repaymentLoan = (loanId: number) => {
    loanRepayment(Number(params.loanId)).then((response) => {
      swal('납입 완료', '대출금이 납입되었습니다.', 'success');
    });
  };
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
            <BalanceContainer>{addComma(data?.remainPrice)}원</BalanceContainer>
            <NextSendAlarm>
              다음 납입일은 2024.
              {data?.startDate &&
                `${(1 + Number(data?.repaymentCnt))
                  .toString()
                  .padStart(2, '0')}.
              ${data?.startDate.toString().split('.')[2]}`}{' '}
              입니다
            </NextSendAlarm>
            <Progress
              percent={calPercent(data?.repaymentCnt, data?.period)}
              showInfo={false}
              strokeColor={theme.colors.primary_purple}
              size={['default', 20]}
            ></Progress>
            {data?.remainPrice !== 0 && (
              <div
                style={{ marginTop: '5px', color: theme.colors.primary_purple }}
              >
                앞으로 {data?.period - data?.repaymentCnt}번만 더 내면 완료!
              </div>
            )}
            {data?.remainPrice === 0 && (
              <div
                style={{ marginTop: '5px', color: theme.colors.primary_purple }}
              >
                대출을 상환 완료했습니다. 고생하셨습니다!
              </div>
            )}
          </ProgressBackground>
          <ContentBackground />
          {path.includes('child') && (
            <BigButton
              text="납입"
              onClick={() => {
                if (data && data?.repaymentCnt !== data?.period)
                  repaymentLoan(Number(params.loanId));
                else swal('상환 완료', '모든 금액을 상환했습니다.', 'success');
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default ChildLoanDetail;
