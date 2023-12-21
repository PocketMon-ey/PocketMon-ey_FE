import React, { useRef, useState } from 'react';
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
import { userServiceAxiosInstance } from '../../../core/api/axios';
import { useQuery } from '@tanstack/react-query';

const PrimeRate = () => {
  const [primeRate, setPrimeRate] = useState<string>('2');
  const primeRateInput = useRef<HTMLInputElement>();

  const fetchFamilyRate = async () =>
    await userServiceAxiosInstance.get(`/user/PIR/2`).then((res) => res.data);
  const { data, isLoading, error } = useQuery({
    queryKey: [`primerate`],
    queryFn: () => fetchPrimeRate(),
  });

  return (
    <>
      <Header headerTitle="금리 조정" />
      <div>
        <RateHeader>
          <RateTitle>김지훈(아이)의</RateTitle>
          <RateParagraph>현재 우대금리 : {primeRate}%</RateParagraph>
          <RateParagraph>미션 달성률 : 50%</RateParagraph>
          <RateParagraph
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
                placeholder={primeRate}
              ></StyledTextFiled>
              %
            </div>
          </RateParagraph>
        </RateHeader>
      </div>
      <div
        onClick={() => {
          if (primeRateInput.current) {
            putPrimeRate(parseFloat(primeRateInput.current.value))
              .then((response) => {
                if (typeof response === 'number') {
                  setPrimeRate(response.toString());
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
