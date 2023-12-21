import styled from 'styled-components';
import { theme } from '../../styles';
type Props = { ref: React.MutableRefObject<HTMLInputElement | undefined> };

export const StyledTextFiled = styled.input<Props>`
  width: 50px;
  min-height: 60px;
  padding-left: 20px;
  font-size: 20px;
  border: 1px solid ${theme.colors.gray_001};
  height: 48px;
  color: ${theme.colors.black};
  border-radius: 10px;
  &::placeholder {
    color: ${theme.colors.gray_002};
  }
`;

export const RateParagraph = styled.p`
  font-size: 24px;
`;

export const RateHeader = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: ${theme.colors.white};

  font-weight: 700;
  padding-left: 30px;
`;

export const RateTitle = styled.div`
  font-size: 35px;
`;
