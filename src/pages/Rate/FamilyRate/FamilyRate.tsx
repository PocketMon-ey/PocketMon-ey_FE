import React, { useRef, useState } from 'react';
import {
  RateHeader,
  RateParagraph,
  RateTitle,
  StyledTextFiled,
} from '../styled';
import { BigButton, Header } from '../../../components/common';
import {
  getRate,
  putFamilyRate,
} from '../../../core/api/user/useFamilyRatePut';
import { userServiceAxiosInstance } from '../../../core/api/axios';
import { useQuery } from '@tanstack/react-query';
const FamilyRate = () => {
  // const [familyRate, setFamilyRate] = useState<string>('5');

  const fetchFamilyRate = async () =>
    await userServiceAxiosInstance.get(`/user/FR/1`).then((res) => res.data);

  const { data, isLoading, error } = useQuery({
    queryKey: [`familyrate`],
    queryFn: () => fetchFamilyRate(),
  });

  const rate = useQuery({
    queryKey: ['rate'],
    queryFn: () => getRate(),
  });

  const familyRateInput = useRef<HTMLInputElement>();
  return (
    <>
      <Header headerTitle="금리 조정" />
      <RateHeader>
        <RateTitle>우리 가족의</RateTitle>
        <RateParagraph>현재 가족금리 : {data}%</RateParagraph>
        <RateParagraph>
          수정 후 가족금리 :
          <StyledTextFiled
            ref={familyRateInput}
            placeholder={data}
            required
          ></StyledTextFiled>
          %
        </RateParagraph>
      </RateHeader>
      <div
        onClick={() => {
          const { familyRate, preferInterestRate } = rate.data?.data;

          if (familyRateInput.current) {
            if (parseFloat(familyRateInput.current.value) <= 0) {
              alert('가족 금리는 0 이상이어야 합니다!');
              return;
            } else if (parseFloat(familyRateInput.current.value) > 20) {
              alert('금리가 너무 높습니다.');
              return;
            } else if (!parseFloat(familyRateInput.current.value)) {
              alert('숫자를 입력해주세요!');
              return;
            } else if (familyRateInput.current.value <= preferInterestRate) {
              alert(
                `가족금리는 우대금리보다 높아야 합니다. \n 현재 우대금리 : ${preferInterestRate}`,
              );
              return;
            }
            putFamilyRate(parseFloat(familyRateInput.current.value)).then(
              (response) => {
                if (typeof response === 'number') {
                  alert(`가족금리가 수정되었습니다.`);
                } else {
                  alert('네트워크 오류!');
                }
              },
            );
            familyRateInput.current.value = '';
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

export default FamilyRate;
