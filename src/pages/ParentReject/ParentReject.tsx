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
// import UpArrow from '../../../public/images/up-arrow.png';
// import CollyReject from '../../../public/images/colly_reject.png';
import { RejectImage } from './styled';
import { BigButton } from '../../components/common';
const ParentReject = () => {
  const rejectInput = useRef<any>(null);
  return (
    <div style={{ height: '200vh' }}>
      <RejectHeader>
        김지훈(아이)의 <br /> 대출 요청을
        <br /> 왜 반려하시나요?
      </RejectHeader>
      <RejectImageContainer>
        <RejectImage src="/images/colly_reject.png" alt="reject!!" />
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
          <TopButton src="/images/up-arrow.png"></TopButton>
        </TopButtonContainer>
        <RejectTextFiled ref={rejectInput} />
        <BigButton text="전송"></BigButton>
      </RejectInputSection>
    </div>
  );
};

export default ParentReject;
