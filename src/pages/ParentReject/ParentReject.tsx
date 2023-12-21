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
import { BigButton, Header } from '../../components/common';
import CollyReject from '../../components/common/CollyReject/CollyReject';
import UpArrow from '../../components/common/UpArrow/UpArrow';
import { loanServiceAxiosInstance } from '../../core/api/axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ParentReject = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Header headerTitle=""></Header>
      <div style={{ height: '200vh' }}>
        <RejectHeader>
          김지훈(아이)의 <br /> 대출 요청을
          <br /> 왜 반려하시나요?
        </RejectHeader>
        <RejectImageContainer>
          <CollyReject />
        </RejectImageContainer>
        <RejectReasonList>
          <RejectReasonContainer
            onClick={async () => {
              await loanServiceAxiosInstance
                .put('/loan/refuse', {
                  loanId: path.split('/')[4],
                  rejectionReason: '과한 금액',
                })
                .then((res) => {
                  if (res.status === 200) {
                    alert('반려 사유가 과한 금액으로 전송되었습니다.');
                    navigate('/parent/loan/list');
                  }
                });
            }}
          >
            과한 금액
          </RejectReasonContainer>
          <RejectReasonContainer
            onClick={async () => {
              await loanServiceAxiosInstance
                .put('/loan/refuse', {
                  loanId: path.split('/')[4],
                  rejectionReason: '신청 사유 미흡',
                })
                .then((res) => {
                  if (res.status === 200) {
                    alert('반려 사유가 신청 사유 미흡으로 전송되었습니다.');
                    navigate('/parent/loan/list');
                  }
                });
            }}
          >
            신청 사유 미흡
          </RejectReasonContainer>
          <RejectReasonContainer
            onClick={async () => {
              await loanServiceAxiosInstance
                .put('/loan/refuse', {
                  loanId: path.split('/')[4],
                  rejectionReason: '채무 부담',
                })
                .then((res) => {
                  if (res.status === 200) {
                    alert('반려 사유가 채무 부담으로 전송되었습니다.');
                    navigate('/parent/loan/list');
                  }
                });
            }}
          >
            채무 부담
          </RejectReasonContainer>
          <RejectReasonContainer
            onClick={async () => {
              await loanServiceAxiosInstance
                .put('/loan/refuse', {
                  loanId: path.split('/')[4],
                  rejectionReason: '낮은 신용도',
                })
                .then((res) => {
                  if (res.status === 200) {
                    alert('반려 사유가 낮은 신용도로 전송되었습니다.');
                    navigate('/parent/loan/list');
                  }
                });
            }}
          >
            낮은 신용도
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
          <RejectTextFiled ref={inputRef} required />
          <BigButton
            text="전송"
            onClick={async () => {
              await loanServiceAxiosInstance
                .put('/loan/refuse', {
                  loanId: path.split('/')[4],
                  rejectionReason: inputRef.current?.value,
                })
                .then((res) => {
                  if (res.status === 200) {
                    alert('직접 작성된 반려 사유가 전송되었습니다.');
                    navigate('/parent/loan/list');
                  }
                });
            }}
          ></BigButton>
        </RejectInputSection>
      </div>
    </>
  );
};

export default ParentReject;
