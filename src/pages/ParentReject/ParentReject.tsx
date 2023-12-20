import React, { useRef } from 'react';
import {
  RejectHeader,
  RejectImageContainer,
  RejectInputSection,
  RejectReasonContainer,
  RejectReasonList,
  RejectTextFiled,
  TopButton,
  TopButtonContainer,
} from './styled';
// import UpArrow from '../../../src/assets/images/up-arrow.png';
// import CollyReject from '../../../src/assets/images/colly_reject.jpg';
import { RejectImage } from './styled';
import { BigButton } from '../../components/common';

const ParentReject = () => {
  return (
    <div style={{ height: '200vh' }}>
      <RejectHeader>
        김지훈(아이)의 <br /> 대출 요청을
        <br /> 왜 반려하시나요?
      </RejectHeader>
      <RejectImageContainer>
        <RejectImage
          src={process.env.PUBLIC_URL + 'images/colly_reject.jpg'}
          alt="reject!!"
        />
      </RejectImageContainer>
      <RejectReasonList>
        <RejectReasonContainer>과한 금액</RejectReasonContainer>
        <RejectReasonContainer>신청 사유 미흡</RejectReasonContainer>
        <RejectReasonContainer>채무 부담</RejectReasonContainer>
        <RejectReasonContainer>낮은 신용도</RejectReasonContainer>
        <div
          onClick={() => {
            window.scrollTo({ top: 1000, behavior: 'smooth' });
          }}
        >
          <RejectReasonContainer>직접 입력</RejectReasonContainer>
        </div>
      </RejectReasonList>

      <RejectInputSection>
        <TopButtonContainer
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <TopButton
            src={process.env.PUBLIC_URL + 'images/up-arrow.jpg'}
          ></TopButton>
        </TopButtonContainer>
        <RejectTextFiled />
        <BigButton text="전송"></BigButton>
      </RejectInputSection>
    </div>
  );
};

export default ParentReject;
