import React from 'react';
import { RateParagraph, StyledTextFiled } from '../styled';
import { BigButton } from '../../../components/common';
const FamilyRate = () => {
  return (
    <div>
      <RateParagraph>우리 가족의 현재 가족금리 : 5%</RateParagraph>
      <RateParagraph>
        수정 후 우리 가족의 가족금리 :
        <br />
        <StyledTextFiled placeholder="5"></StyledTextFiled>%
      </RateParagraph>
      <BigButton text="완료" />
    </div>
  );
};

export default FamilyRate;
