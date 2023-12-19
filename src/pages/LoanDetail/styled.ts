import styled from 'styled-components';
import { theme } from '../../styles';

export const ProgressBackground = styled.section`
  height: fit-content;
  width: 100vw;
  position: relative;
  background-color: ${theme.colors.white};
  margin: 0;
  padding: 20px 30px;
  right: 0;
  left: -30px;
  margin-bottom: 20px;
`;

export const BalanceContainer = styled.div`
  font-size: 48px;
  font-weight: 700;
`;

export const NextSendAlarm = styled.div`
  color: ${theme.colors.gray_004};
  margin-top: 5px;
  margin-bottom: 5px;
`;
