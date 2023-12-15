import styled from 'styled-components';
import { theme } from '../../../styles';

export const StyledTextFiled = styled.input`
  width: 340px;
  height: 60px;
  font-size: 20px;
  border: 1px solid ${theme.colors.gray_001};
  padding: 8px 16px;
  height: 48px;
  color: ${theme.colors.black};
  border-radius: 10px;
  &::placeholder {
    color: ${theme.colors.gray_002};
  }
`;
