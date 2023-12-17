import { Header } from '../../components/common';
import { LoanInput, TitleHeader } from '../../components/feature';

const ApplyLoan = () => {
  return (
    <>
      <Header headerTitle={'대출 신청'} />
      <TitleHeader
        title={'대출을 신청해볼까요?'}
        firstS={'대출사유와 함께 금액을 설정해주세요.'}
        secondS={'신청 후, 보호자가 승인하면 대출을 할 수 있어요!'}
      />
      <LoanInput />
    </>
  );
};

export default ApplyLoan;
