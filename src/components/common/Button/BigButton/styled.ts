import styled from 'styled-components';
import { theme } from '../../../../styles';

type Props = {
  type: string;
};

export const BigButtonContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  color: white;
  font-size: 30px;
  background-color: ${(props) => {
    switch (props.type) {
      case '승인':
        return '#0057FF';
      case '반려':
        return theme.colors.primary_pink;
      case '다음':
        return theme.colors.primary_purple;
      case '요청':
        return theme.colors.primary_purple;
      case '전송':
        return theme.colors.primary_purple;
      case '취소':
        return theme.colors.primary_purple;
      case '등록':
        return theme.colors.primary_purple;
      case '조정하기':
        return theme.colors.primary_blue;
      case '완료':
        return theme.colors.primary_purple;
    }
  }};

  width: ${(props) => {
    switch (props.type) {
      case '승인':
        return '45%';
      case '반려':
        return '45%';
      case '다음':
        return '100%';
      case '요청':
        return '100%';
      case '전송':
        return '100%';
      case '취소':
        return '100%';
      case '등록':
        return '100%';
      case '조정하기':
        return '45%';
      case '완료':
        return '100%';
    }
  }};

  height: 70px;
`;
