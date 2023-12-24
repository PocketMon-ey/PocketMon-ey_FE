import React, { useRef } from 'react';
import { BigButton, Header } from '../../components/common';
import {
  RejectHeader,
  RejectImageContainer,
  RejectInputSection,
  RejectReasonContainer,
  RejectReasonList,
  RejectTextFiled,
  TopButtonContainer,
} from '../ParentReject/styled';
import CollyReject from '../../components/common/CollyReject/CollyReject';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UpArrow from '../../components/common/UpArrow/UpArrow';

const MissionReject = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <>
        <Header headerTitle=""></Header>
        <div style={{ height: '200vh' }}>
          <RejectHeader>
            김지훈(아이)의 <br /> 미션 완료 요청을
            <br /> 왜 반려하시나요?
          </RejectHeader>
          <RejectImageContainer>
            <CollyReject />
          </RejectImageContainer>
          <RejectReasonList>
            <RejectReasonContainer
              onClick={() =>
                window.webkit.messageHandlers.rejectReason.postMessage(
                  '수행 정도 미흡',
                )
              }
            >
              수행 정도 미흡
            </RejectReasonContainer>
            <RejectReasonContainer
              onClick={() =>
                window.webkit.messageHandlers.rejectReason.postMessage(
                  '과한 수당',
                )
              }
            >
              과한 수당
            </RejectReasonContainer>
            <RejectReasonContainer
              onClick={() =>
                window.webkit.messageHandlers.rejectReason.postMessage(
                  '추후 확인',
                )
              }
            >
              추후 확인
            </RejectReasonContainer>
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
              <UpArrow />
            </TopButtonContainer>
            <RejectTextFiled ref={inputRef} />
            <BigButton
              text="전송"
              onClick={() =>
                window.webkit.messageHandlers.rejectReason.postMessage(
                  `${inputRef.current?.value}`,
                )
              }
            ></BigButton>
          </RejectInputSection>
        </div>
      </>
    </>
  );
};

export default MissionReject;
