import { styled } from 'styled-components';
import * as S from './styled';
import { theme } from '../../../styles';
import { loanApplyStore } from '../../../store/loanApplyStore';
import { useLocation, useParams } from 'react-router-dom';
import { useLoanService } from '../../../core/loanService';
import {
  loanServiceAxiosInstance,
  userServiceAxiosInstance,
} from '../../../core/api/axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  DetailResponse,
  getDetail,
} from '../../../core/api/loan/useLoanDetailGet';
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
  const params = useParams();
  console.log(params.loanId);
  const [data, setData] = useState<DetailResponse>();
  useEffect(() => {
    const fetchRate = async () =>
      await axios.all([fetchFamilyRate(), fetchPrimeRate()]).then(
        axios.spread((res1, res2) => {
          const response1 = res1.data;
          const response2 = res2.data;

          const res = { familyrate: response1, primerate: response2 };
          console.log('Res', res);
          changeValue('loanInterest', Math.ceil(response1 - response2));
        }),
      );
    fetchRate();
    if (params.loanId) {
      const res = getDetail(Number(params.loanId)).then((response) => {
        console.log(response);
        setData(response);
      });
    }
  }, []);
  const { addComma } = useLoanService();

  const path = useLocation().pathname;

  const fetchFamilyRate = () => userServiceAxiosInstance.get(`/user/FR/1`);

  const fetchPrimeRate = () => userServiceAxiosInstance.get(`/user/PIR/2`);

  // const fetchRate = async () =>
  //   await axios.all([fetchFamilyRate(), fetchPrimeRate()]).then(
  //     axios.spread((res1, res2) => {
  //       const response1 = res1.data;
  //       const response2 = res2.data;

  //       const res = { familyrate: response1, primerate: response2 };
  //       changeValue('loanInterest', response1 - response2);
  //       return res;
  //     }),
  //   );

  return (
    <S.StyledBackground>
      <StyledIntro>
        <span>상세</span>
        {path.includes('checkContract') && !params.loanId && <p>{reason}</p>}
        {(path.includes('detail') || params.loanId) && data && (
          <p>{data?.reason}</p>
        )}

        {path.includes('checkContract') && !params.loanId && (
          <p id="amount">{addComma(price)}원</p>
        )}
        {(path.includes('detail') || params.loanId) && data && (
          <p id="amount">{addComma(data?.price)}원</p>
        )}
      </StyledIntro>
      <S.StyledDetail>
        <StyledDetailItem>
          <span>총 납입금액</span>
          {path.includes('checkContract') && !params.loanId && (
            <span>{addComma(totalPrice)}원</span>
          )}

          {(path.includes('detail') || params.loanId) && data && (
            <span>{addComma(data?.totalPrice)}원</span>
          )}
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출원금</span>
          {path.includes('checkContract') && !params.loanId && (
            <span>{addComma(price)}원</span>
          )}
          {(path.includes('detail') || params.loanId) && data && (
            <span>{addComma(data?.price)}원</span>
          )}
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출금리</span>
          <span>{loanInterest}%</span>
        </StyledDetailItem>
        <StyledDetailItem>
          <span>대출기간</span>
          {path.includes('checkContract') && !params.loanId && (
            <span>{period}개월</span>
          )}
          {(path.includes('detail') || params.loanId) && data && (
            <span>{data?.period}개월</span>
          )}
        </StyledDetailItem>
        <StyledDetailItem>
          <span>월 납입금액</span>
          {path.includes('checkContract') && !params.loanId && (
            <span>{addComma(pricePerMonth)}원</span>
          )}
          {(path.includes('detail') || params.loanId) && data && (
            <span>{addComma(data?.monthlyRepaymentPrice)}원</span>
          )}
        </StyledDetailItem>
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>시작일</span>
            {(path.includes('detail') || params.loanId) && data && (
              <span>{`20${data?.startDate}`}</span>
            )}
          </StyledDetailItem>
        )}
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>마감일</span>
            {(path.includes('detail') || params.loanId) && data && (
              <span>{`20${data?.startDate}`}</span>
            )}
          </StyledDetailItem>
        )}
        {(path.includes('ongoing') || path.includes('detail')) && (
          <StyledDetailItem>
            <span>납입일</span>

            {(path.includes('detail') || params.loanId) && data && (
              <span>매달 {data?.startDate.split('.')[2]}일</span>
            )}
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
