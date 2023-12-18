import * as S from './styled';
type Props = {
  title: string;
  firstS: string;
  secondS: string;
};

const TitleHeader = ({ title, firstS, secondS }: Props) => {
  return (
    <S.StyledContainer>
      <S.StyledBackground>
        <S.StyledTitle>{title}</S.StyledTitle>
        <S.StyledFirstSentence>{firstS}</S.StyledFirstSentence>
        <S.StyledSecondSentence>{secondS}</S.StyledSecondSentence>
      </S.StyledBackground>
    </S.StyledContainer>
  );
};
export default TitleHeader;
