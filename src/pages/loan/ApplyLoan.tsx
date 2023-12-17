import { Header } from '../../components/common';
import { LoanInput, TitleHeader } from '../../components/feature';

const ApplyLoan = () => {
  return (
    <>
      <Header headerTitle={'대출 신청'} />
      <TitleHeader />
      <LoanInput />
    </>
  );
};

export default ApplyLoan;
