import styled from 'styled-components';
import { BigButton } from '../../components/common';
import { LoanInput, TitleHeader } from '../../components/feature';
import { theme } from '../../styles';
import { loanApplyStore } from '../../store/loanApplyStore';

const ApplyLoan = () => {
  const { reason, amount, changeValue } = loanApplyStore();
  return (
    <>
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
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeValue('amount', e.currentTarget.value)
            }
          />
          <span>원</span>
        </div>
      </StyledInputSection>
      <StyledButtonBottom>
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
