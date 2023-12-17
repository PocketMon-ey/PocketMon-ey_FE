import styled from 'styled-components';
import { theme } from '../../../../styles';

type Props = { selectedcode: number; servicecode: string };

export const SmallButtonContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.selectedcode
      ? props.servicecode === 'mi'
        ? theme.colors.primary_pink
        : theme.colors.primary_green
      : theme.colors.white};

  color: ${(props) =>
    props.selectedcode ? theme.colors.white : theme.colors.gray_003};
  border-radius: 5px;
  width: 20%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
