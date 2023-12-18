import styled from 'styled-components';
import { theme } from '../../../styles';

export const StyledTextFiled = styled.input`
  width: 340px;
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
