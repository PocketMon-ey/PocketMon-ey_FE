import { styled } from 'styled-components';
import { TitleHeader } from '../../components/feature';

const ActualPayment = () => {
  return (
    <>
      <TitleHeader
        title="대출기간을 선택하세요"
        firstS="대출 기간에 따라 이자가 변화합니다."
        secondS="납입금액 확인 후, 적절한 기간을 선택해주세요."
      />
    </>
  );
};
export default ActualPayment;
