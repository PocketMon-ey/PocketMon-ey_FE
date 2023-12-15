import styled from 'styled-components';
import { theme } from '../../../../styles';

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  height: 100px;
`;

export const ReasonContainer = styled.div`
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 5px;
`;

export const TotalPriceContainer = styled.div`
  color: ${theme.colors.primary_blue};
  font-size: 22px;
  padding-right: 10px;
`;

export const TotalPriceSpanContainer = styled.span`
  float: right;
`;
