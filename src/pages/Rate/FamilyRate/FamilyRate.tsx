import React from 'react';
import {
  RateHeader,
  RateParagraph,
  RateTitle,
  StyledTextFiled,
} from '../styled';
import { BigButton } from '../../../components/common';
const FamilyRate = () => {
  return (
    <>
      <RateHeader>
        <RateTitle>우리 가족의</RateTitle>
        <RateParagraph>현재 가족금리 : 5%</RateParagraph>
        <RateParagraph>
          수정 후 가족금리 :<StyledTextFiled placeholder="5"></StyledTextFiled>%
        </RateParagraph>
      </RateHeader>
      <BigButton text="완료" />
    </>
  );
};

export default FamilyRate;
