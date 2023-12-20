import styled from 'styled-components';
import { theme } from '../styles';

type Props = {
  id: number;
};

export const HomeCardContainer = styled.div<Props>`
  width: 160px;
  height: 190px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => {
    switch (props.id) {
      case 1:
        return '#FFBC00';
      case 2:
        return theme.colors.primary_pink;
      case 3:
        return theme.colors.primary_green;
      case 4:
        return theme.colors.primary_purple;
    }
  }};
  color: ${theme.colors.white};
`;

export const MainTitleContainer = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`;

export const SubTitleContainer = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 50px;
`;

export const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const CardGridContainer = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const HomeImageContainer = styled.img`
  width: 300px;
  height: 120px;
  object-fit: fill;
`;
