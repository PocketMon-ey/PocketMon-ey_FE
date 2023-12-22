import styled from 'styled-components';
import { BigButton, Header } from '../../components/common';
import { LoanInput, TitleHeader } from '../../components/feature';
import { theme } from '../../styles';
import { loanApplyStore } from '../../store/loanApplyStore';
import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';
import { LoanItem, getLoan } from '../../core/api/loan/useLoanGet';
import { postLoan } from '../../core/api/loan/useLoanPost';
import { useNavigate } from 'react-router-dom';
import { useLoanService } from '../../core/loanService';

const ApplyLoan = () => {
  const { reason, price, changeValue } = loanApplyStore();
  const { addComma, submitLoanApply } = useLoanService();
  const navigate = useNavigate();
  const [addCommaValue, setAddCommaValue] = useState(price);

  return (
    <>
      <Header headerTitle="대출 신청" />
      <TitleHeader
        title="대출을 신청해볼까요?"
        firstS="대출사유와 함께 금액을 설정해주세요."
        secondS="신청 후, 보호자가 승인하면 대출을 할 수 있어요!"
      />
      <StyledInputSection>
        <span>사유</span>
        <LoanInput
          id="reason"
          placeholder="예) 아이유 콘서트에 가고 싶어요."
          value={reason}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeValue('reason', e.currentTarget.value)
          }
        />
        <StyledTip>
          tip: 스스로 납득이 가능한 대출 사유인지 생각해보세요.
        </StyledTip>
      </StyledInputSection>
      <StyledInputSection>
        <span>금액</span>
        <div>
          <LoanInput
            id="amount"
            type="number"
            placeholder="예) 99,900"
            value={price !== 0 ? price : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeValue('price', Number(e.currentTarget.value));
            }}
          />
          <span>원</span>
        </div>
      </StyledInputSection>
      <StyledButtonBottom
        onClick={() => {
          if (!reason) {
            alert('대출 사유를 입력해주세요');
            return;
          } else {
            if (price) {
              if (typeof price !== 'number') {
                alert('금액은 숫자로 입력해주세요');
                return;
              } else if (price < 0) {
                alert('올바르지 않은 금액입니다.');
                return;
              } else if (price > 5000000) {
                alert('대출 금액이 너무 높습니다.');
                return;
              }
            } else {
              alert('금액을 입력해주세요');
              return;
            }
          }
          navigate('/child/loan/actualPayment');
        }}
      >
        <BigButton text="다음" />
      </StyledButtonBottom>
    </>
  );
};
export default ApplyLoan;

export const StyledButtonBottom = styled.div`
  position: absolute;
  bottom: 30px;
  padding: 0;
  right: 30px;
  left: 30px;
`;
const StyledTip = styled.div`
  display: inline-block;
  color: ${theme.colors.primary_purple};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 5px;
  margin-top: 10px;
`;
const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 70px;
  & > span {
    color: ${theme.colors.black};
    font-size: 22px;
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 700;
  }
  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    span {
      color: ${theme.colors.black};
      font-size: 22px;
      display: inline-block;
      font-weight: 700;
    }
  }
`;
