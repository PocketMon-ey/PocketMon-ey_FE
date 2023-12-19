import React from 'react';
import {
  RateHeader,
  RateParagraph,
  RateTitle,
  StyledTextFiled,
} from '../styled';
import { BigButton } from '../../../components/common';

const PrimeRate = () => {
  return (
    <>
      <div>
        <RateHeader>
          <RateTitle>김지훈(아이)의</RateTitle>
          <RateParagraph>현재 우대금리 : 2%</RateParagraph>
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
              <StyledTextFiled placeholder="2"></StyledTextFiled>%
            </div>
          </RateParagraph>
        </RateHeader>
      </div>
      <BigButton text="완료" />
    </>
  );
};

export default PrimeRate;
