import styled from 'styled-components';
import { theme } from '../../styles';
import * as S from '../../components/feature/TitleHeader/styled';

export const RateHeader = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 35px;
  font-weight: 700;
  margin-left: 30px;
  margin-top: 25px;
`;

export const RejectTextFiled = styled.input`
  width: 340px;
  min-height: 60px;
  padding-left: 20px;
  font-size: 20px;
  border: 1px solid ${theme.colors.gray_001};
  height: 48px;
  color: ${theme.colors.black};
  border-radius: 10px;
  &::placeholder {
    color: ${theme.colors.gray_002};
  }
  margin-bottom: 20px;
`;

type Props = {
  title: string;
  firstS: string;
  secondS: string;
};

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
