import { styled } from 'styled-components';
import * as S from './styled';
import { theme } from '../../../styles';
import { loanApplyStore } from '../../../store/loanApplyStore';
import { useLocation } from 'react-router-dom';
import { useLoanService } from '../../../core/loanService';
import { userServiceAxiosInstance } from '../../../core/api/axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
type Props = {
  familyrate: number;
  primerate: number;
};
const ContentBackground = () => {
  const {
    reason,
    price,
    loanInterest,
    period,
    changeValue,
    pricePerMonth,
    totalPrice,
  } = loanApplyStore();
  const { addComma } = useLoanService();

  const path = useLocation().pathname;

  const fetchFamilyRate = () => userServiceAxiosInstance.get(`/user/FR/1`);

  const fetchPrimeRate = () => userServiceAxiosInstance.get(`/user/PIR/2`);

  const fetchRate = async () =>
    await axios.all([fetchFamilyRate(), fetchPrimeRate()]).then(
      axios.spread((res1, res2) => {
        const response1 = res1.data;
        const response2 = res2.data;

        const res = { familyrate: response1, primerate: response2 };
        changeValue('loanInterest', response1 - response2);
        return res;
      }),
    );

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
          <span>{addComma(totalPrice)}원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출원금</span>
          <span>{addComma(price)}원</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출금리</span>
          <span>{loanInterest}%</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출기간</span>
          <span>{period}개월</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>월 납입금액</span>
          <span>{addComma(pricePerMonth)}원</span>
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
