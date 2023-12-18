import { styled } from 'styled-components';
import * as S from './styled';
import { theme } from '../../../styles';
import { loanApplyStore } from '../../../store/loanApplyStore';
type Props = {
  title: string;
  firstS: string;
  secondS: string;
};

const ContentBackground = () => {
  const { reason, amount, changeValue } = loanApplyStore();
  return (
    <S.StyledBackground>
      <StyledIntro>
        <span>상세</span>
        <p>{reason}</p>
        <p id="amount">{amount}원</p>
      </StyledIntro>
      <S.StyledDetail>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>총 상환금액</span>
          <span>120,000원</span>
        </StyledDetailItem>
      </S.StyledDetail>
    </S.StyledBackground>
  );
};
export default ContentBackground;

const StyledDetailItem = styled.div`
  color: ${theme.colors.gray_004};
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${theme.colors.black};
  font-size: 22px;
  font-weight: 400;

  & > span {
    color: ${theme.colors.black};
    font-size: 22px;
    font-weight: 700;
  }
  & > p {
    margin: 0;
    padding: 0;
  }
  & > p#amount {
    margin: 0;
    padding: 0;
    color: ${theme.colors.primary_purple};
    align-self: flex-end;
  }
  padding-bottom: 20px;
`;
