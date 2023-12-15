import styled from 'styled-components';
import { theme } from '../../../../styles';

export const AddContainer = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 25px;
  background-color: ${theme.colors.primary_green};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Add = styled.div`
  font-size: 20px;
  color: ${theme.colors.white};
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
