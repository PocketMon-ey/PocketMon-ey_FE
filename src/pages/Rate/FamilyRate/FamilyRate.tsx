import React, { useRef, useState } from 'react';
import {
  RateHeader,
  RateParagraph,
  RateTitle,
  StyledTextFiled,
} from '../styled';
import { BigButton, Header } from '../../../components/common';
import { putFamilyRate } from '../../../core/api/user/useFamilyRatePut';
const FamilyRate = () => {
  const [familyRate, setFamilyRate] = useState<string>('5');
  const familyRateInput = useRef<HTMLInputElement>();
  return (
    <>
      <Header headerTitle="금리 조정" />
      <RateHeader>
        <RateTitle>우리 가족의</RateTitle>
        <RateParagraph>현재 가족금리 : {familyRate}%</RateParagraph>
        <RateParagraph>
          수정 후 가족금리 :
          <StyledTextFiled
            ref={familyRateInput}
            placeholder={familyRate}
          ></StyledTextFiled>
          %
        </RateParagraph>
      </RateHeader>
      <div
        onClick={() => {
          if (familyRateInput.current) {
            putFamilyRate(parseFloat(familyRateInput.current.value)).then(
              (response) => {
                if (typeof response === 'number') {
                  setFamilyRate(response.toString());
                  alert(`가족금리가 수정되었습니다.`);
                } else {
                  alert('오류!');
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
