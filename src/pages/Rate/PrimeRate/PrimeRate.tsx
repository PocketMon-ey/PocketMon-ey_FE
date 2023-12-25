import React, { useEffect, useRef, useState } from 'react';
import {
  RateHeader,
  RateParagraph,
  RateTitle,
  StyledTextFiled,
} from '../styled';
import { BigButton, Header } from '../../../components/common';
import {
  fetchPrimeRate,
  putPrimeRate,
} from '../../../core/api/user/usePrimeRatePut';
import {
  missionServiceAxiosInstance,
  userServiceAxiosInstance,
} from '../../../core/api/axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRate } from '../../../core/api/user/useFamilyRatePut';

const PrimeRate = () => {
  // const [primeRate, setPrimeRate] = useState<string>('2');
  const [success, setSuccess] = useState();
  const primeRateInput = useRef<HTMLInputElement>();

  const fetchPrimeRate = async () =>
    await userServiceAxiosInstance.get(`/user/PIR/2`).then((res) => res.data);

  const { data, isLoading, error } = useQuery({
    queryKey: [`primerate`],
    queryFn: () => fetchPrimeRate(),
  });

  const fetchCredit = async () =>
    await missionServiceAxiosInstance
      .get(`/mission/achieve/2`)
      .then((res) => setSuccess(res.data.achievementRate));

  const credit = useQuery({
    queryKey: ['credit'],
    queryFn: () => fetchCredit(),
  });

  const rate = useQuery({
    queryKey: ['rate'],
    queryFn: () => getRate(),
  });

  useEffect(() => {
    fetchCredit();
  }, []);
  return (
    <>
      <Header headerTitle="금리 조정" />
      <RateHeader>
        <RateTitle>김금쪽(아이)의</RateTitle>
        <RateParagraph>현재 우대금리 : {data}%</RateParagraph>
        <RateParagraph>미션 달성률 : {success}%</RateParagraph>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          수정 후 우대금리 :
          <div style={{ textAlign: 'center' }}>
            <StyledTextFiled
              ref={primeRateInput}
              placeholder={data}
              required
            ></StyledTextFiled>
            %
          </div>
        </div>
      </RateHeader>
      <div
        onClick={() => {
          const { familyRate, preferInterestRate } = rate.data?.data;
          if (primeRateInput.current) {
            if (parseFloat(primeRateInput.current.value) < 0) {
              alert('우대 금리는 0보다 커야 합니다!');
              return;
            } else if (parseFloat(primeRateInput.current.value) > 20) {
              alert('금리가 너무 높습니다.');
              return;
            } else if (!parseFloat(primeRateInput.current.value)) {
              alert('숫자를 입력해주세요!');
              return;
            } else if (primeRateInput.current.value >= familyRate) {
              alert(
                `우대금리는 가족금리 보다 낮아야 합니다. \n 현재 가족금리 : ${familyRate}`,
              );
              return;
            }
            putPrimeRate(parseFloat(primeRateInput.current.value))
              .then((response) => {
                if (typeof response === 'number') {
                  // setPrimeRate(response.toString());
                  alert('우대 금리가 수정되었습니다.');
                } else {
                  alert('오류!');
                }
              })
              .catch((err) => alert(err.response));
            primeRateInput.current.value = '';
          } else {
            return;
          }
        }}
      >
        <BigButton text="완료" />
      </div>
    </>
  );
};

export default PrimeRate;
