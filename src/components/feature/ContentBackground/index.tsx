import { styled } from 'styled-components';
import * as S from './styled';
import { theme } from '../../../styles';
import { loanApplyStore } from '../../../store/loanApplyStore';
import { useLocation } from 'react-router-dom';
import { addComma } from '../../../core/loanService';

const ContentBackground = () => {
  const { reason, price } = loanApplyStore();
  const path = useLocation().pathname;
  return (
    <S.StyledBackground>
      <StyledIntro>
        <span>상세</span>
        <p>{reason}</p>
        <p id="amount">{addComma(price)}원</p>
      </StyledIntro>
      <S.StyledDetail>
        <StyledDetailItem>
          <span>총 납입금액</span>
          <span>{addComma(120000)}원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출원금</span>
          <span>{price}원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출금리</span>
          <span>{2}%</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출기간</span>
          <span>{3}개월</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>월 납입금액</span>
          <span>{addComma(33400)}원</span>
        </StyledDetailItem>
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>시작일</span>
            <span>{'2023.12.15'}</span>
          </StyledDetailItem>
        )}
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>마감일</span>
            <span>{'2023.03.15'}</span>
          </StyledDetailItem>
        )}
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>납입일</span>
            <span>매달 {15}일</span>
          </StyledDetailItem>
        )}
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
