import React from 'react';
import { RateParagraph, StyledTextFiled } from '../styled';
import { TitleHeader } from '../../../components/feature';
import { BigButton } from '../../../components/common';

const PrimeRate = () => {
  return (
    <div>
      <RateParagraph>김지훈(아이)의 현재 우대금리 : 2%</RateParagraph>
      <RateParagraph>김지훈(아이)의 미션 달성률 : 50%</RateParagraph>
      <RateParagraph>
        수정 후 김지훈(아이)의 우대금리 :
        <br />
        <StyledTextFiled placeholder="2"></StyledTextFiled>%
      </RateParagraph>
      <BigButton text="완료" />
    </div>
  );
};

export default PrimeRate;
