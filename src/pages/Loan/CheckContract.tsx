import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BigButton, Header } from '../../components/common';
import { ContentBackground, TitleHeader } from '../../components/feature';
import { styled } from 'styled-components';
import { StyledButtonBottom } from './ApplyLoan';
import {
  loanServiceAxiosInstance,
  userServiceAxiosInstance,
} from '../../core/api/axios';
import { postLoan } from '../../core/api/loan/useLoanPost';
import { loanApplyStore } from '../../store/loanApplyStore';
import { useEffect, useState } from 'react';

const CheckContract = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [data, setData] = useState();
  const params = useParams();

  const {
    reason,
    price,
    loanInterest,
    period,
    changeInitialize,
    pricePerMonth,
    totalPrice,
  } = loanApplyStore();
  return (
    <>
      <Header headerTitle="대출 심사" />
      {!params.loanId && path.includes('checkContract') && (
        <TitleHeader
          title="계약서를 확인해보세요"
          firstS="아래의 사항으로 대출이 신청됩니다."
          secondS="자신이 신청한 내용이 맞는지 체크해주세요."
        />
      )}
      {path.includes('judge') && (
        <TitleHeader
          title="대출 신청 내역"
          firstS="아이가 신청한 대출내역입니다."
          secondS="승인하면, 계좌에서 바로 돈이 송금됩니다."
        />
      )}
      {path.includes('ongoing') && (
        <TitleHeader
          title="대출 계약서"
          firstS="아래의 사항으로 대출이 진행중입니다."
        />
      )}
      {params.loanId && (
        <TitleHeader
          title="대출 계약서"
          firstS="아래의 사항으로 대출 승인 대기중입니다."
        />
      )}
      <ContentBackground />
      <StyledButtonBottom>
        {path.includes('checkContract') && !params.loanId && (
          <BigButton
            text="다음"
            onClick={async () => {
              await postLoan({
                childId: 3,
                loanInterest: loanInterest,
                period: period,
                price: price,
                pricePerMonth: pricePerMonth,
                reason: reason,
                totalPrice: totalPrice,
              });
              changeInitialize();
              navigate('/child/loan/list');
            }}
          />
        )}
        {path.includes('/parent/loan/judge/:loanId') && (
          <StyledButtonFlexContainer>
            <BigButton text="승인" /> <BigButton text="반려" />
          </StyledButtonFlexContainer>
        )}
      </StyledButtonBottom>
    </>
  );
};

export default CheckContract;

export const StyledButtonFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
