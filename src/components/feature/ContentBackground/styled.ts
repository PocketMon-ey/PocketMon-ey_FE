import { styled } from 'styled-components';
import { theme } from '../../../styles';

export const StyledBackground = styled.section`
  height: fit-content;
  width: 100vw;
  position: relative;
  background-color: ${theme.colors.white};
  margin: 0;
  padding: 20px 30px;
  right: 0;
  left: -30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StyledDetail = styled.section`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  background-color: #f9f9fb;
  padding: 30px;
  border-radius: 20px;
  line-height: 200%;
`;
