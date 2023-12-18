import styled from 'styled-components';
import { theme } from '../../../styles';

export const StyledContainer = styled.section`
  height: 166px;
`;
export const StyledBackground = styled.section`
  height: 166px;
  width: 100vw;
  position: absolute;
  background-color: ${theme.colors.white};
  margin: 0;
  padding: 0;
  right: 0;
  left: 0;
`;
export const StyledTitle = styled.span`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 35px;
  font-weight: 700;
  margin-left: 30px;
  margin-top: 25px;
`;
export const StyledFirstSentence = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: ${theme.colors.gray_004};
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 30px;
`;
export const StyledSecondSentence = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: ${theme.colors.gray_004};
  font-size: 18px;
  font-weight: 400;
  margin-top: 7px;
  margin-left: 30px;
`;
