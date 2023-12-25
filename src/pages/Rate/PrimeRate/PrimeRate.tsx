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
import { userServiceAxiosInstance } from '../../../core/api/axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRate } from '../../../core/api/user/useFamilyRatePut';
import swal from 'sweetalert';

const PrimeRate = () => {
  // const [primeRate, setPrimeRate] = useState<string>('2');
  const primeRateInput = useRef<HTMLInputElement>();

  const fetchPrimeRate = async () =>
    await userServiceAxiosInstance.get(`/user/PIR/2`).then((res) => res.data);

  const { data, isLoading, error } = useQuery({
    queryKey: [`primerate`],
    queryFn: () => fetchPrimeRate(),
  });

  const rate = useQuery({
    queryKey: ['rate'],
    queryFn: () => getRate(),
  });

  return (
    <>
      <Header headerTitle="금리 조정" />
      <RateHeader>
        <RateTitle>김금쪽(아이)의</RateTitle>
        <RateParagraph>현재 우대금리 : {data}%</RateParagraph>
        <RateParagraph>미션 달성률 : 50%</RateParagraph>
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
              swal('금리 조정 실패', '우대 금리는 0보다 커야 합니다!', 'error');
              return;
            } else if (parseFloat(primeRateInput.current.value) > 20) {
              swal('금리 조정 실패', '금리가 너무 높습니다.', 'error');
              return;
            } else if (!parseFloat(primeRateInput.current.value)) {
              swal('금리 조정 실패', '숫자를 입력해주세요!', 'error');
              return;
            } else if (primeRateInput.current.value >= familyRate) {
              swal(
                '금리 조정 실패',
                `우대금리는 가족금리 보다 낮아야 합니다. \n 현재 가족금리 : ${familyRate}`,
                'error',
              );
              return;
            }
            putPrimeRate(parseFloat(primeRateInput.current.value))
              .then((response) => {
                if (typeof response === 'number') {
                  swal(
                    '금리 조정 완료',
                    `우대 금리가 조정되었습니다.`,
                    'success',
                  );
                } else {
                  swal('네트워크 오류', ``, 'error');
                }
              })
              .catch((err) => swal('네트워크 오류', ``, 'error'));
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
