import { useLocation } from 'react-router-dom';
import { BigButton } from '../../components/common';
import { ContentBackground, TitleHeader } from '../../components/feature';
import { styled } from 'styled-components';
import { StyledButtonBottom } from './ApplyLoan';

const CheckContract = () => {
  const path = useLocation().pathname;

  return (
    <>
      {path.includes('checkContract') && (
        <TitleHeader
          title="계약서를 확인해보세요"
          firstS="아래의 사항으로 대출이 신청됩니다."
          secondS="자신이 신청한 내용이 맞는지 체크해주세요."
        />
      )}
      {path.includes('judge') && (
        <TitleHeader
          title="대출 신청 내역"
          firstS="아이가 신청한 대출내역입니다."
          secondS="승인하면, 계좌에서 바로 돈이 송금됩니다."
        />
      )}
      {path.includes('ongoing') && (
        <TitleHeader
          title="대출 계약서"
          firstS="아래의 사항으로 대출이 진행중입니다."
        />
      )}
      <ContentBackground />
      <StyledButtonBottom>
        {path.includes('checkContract') && <BigButton text="다음" />}
        {path.includes('judge') && (
          <StyledButtonFlexContainer>
            <BigButton text="승인" /> <BigButton text="반려" />
          </StyledButtonFlexContainer>
        )}
      </StyledButtonBottom>
    </>
  );
};

export default CheckContract;

export const StyledButtonFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
