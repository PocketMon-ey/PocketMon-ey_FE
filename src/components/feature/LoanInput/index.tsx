import * as S from './styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const LoanInput = (props: Props) => {
  return <S.StyledTextFiled {...props} />;
};
export default LoanInput;
