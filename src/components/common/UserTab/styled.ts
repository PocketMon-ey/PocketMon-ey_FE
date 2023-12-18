import styled from 'styled-components';
import { theme } from '../../../styles';

export const UserTabContainer = styled.div`
  background-color: ${theme.colors.primary_green};
  border-radius: 10px;
  width: 100%;
  height: 80px;
  color: ${theme.colors.white};
  padding: 10px;
  margin-top: 20px;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray_003};
  border-radius: 10px;
  width: 80px;
  height: 20px;
  text-align: center;
`;

export const UserTabHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
