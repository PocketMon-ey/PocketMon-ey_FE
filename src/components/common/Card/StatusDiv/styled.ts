import styled from 'styled-components';
import { theme } from '../../../../styles';

export const StatusDivContainer = styled.div`
  width: 50px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.colors.primary_blue};
`;

export const StatusContainer = styled.span`
  color: ${theme.colors.white};
`;
