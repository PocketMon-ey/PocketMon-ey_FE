import styled from 'styled-components';
import { theme } from '../../styles';

export const ParentCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 170px;
  border-radius: 20px;
  background-color: ${theme.colors.gray_005};
`;

export const ChildCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 170px;
  border-radius: 20px;
  background-color: ${theme.colors.primary_orange};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
`;

export const ImageContainer = styled.img`
  width: 300px;
  height: 120px;
  object-fit: fill;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
`;

export const SubTitleContainer = styled.div``;

export const MainTitleContainer = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`;
