import * as S from './styled';
type Props = {
  title: string;
  firstS: string;
  secondS: string;
};

// const TextField = ({ title,firstS,secondS}: Props) => {
const TitleHeader = () => {
  return (
    <S.StyledBackground>
      <S.StyledTitle>대출을 신청해볼까요?</S.StyledTitle>
      <S.StyledFirstSentence>
        대출사유와 함께 금액을 설정해주세요.
      </S.StyledFirstSentence>
      <S.StyledSecondSentence>
        신청 후, 보호자가 승인하면 대출을 할 수 있어요!
      </S.StyledSecondSentence>
    </S.StyledBackground>
  );
};
export default TitleHeader;
