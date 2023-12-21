import styled from 'styled-components';
import { theme } from '../../styles';
import { RefObject } from 'react';

export const RejectHeader = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 35px;
  font-weight: 700;
  margin-left: 30px;
  margin-top: 25px;
`;

export const RejectImageContainer = styled.div`
  float: right;
`;

export const RejectImage = styled.img`
  width: 170px;
  height: 170px;
`;

export const RejectReasonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  background-color: ${theme.colors.primary_blue};
  margin-bottom: 10px;
`;

export const RejectReasonList = styled.div`
  margin-top: 200px;
`;

export const RejectInputSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10px;
  position: relative;
  margin-top: 100%;
  margin-bottom: 70px;
  & > span {
    color: ${theme.colors.black};
    font-size: 22px;
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 700;
  }
  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    span {
      color: ${theme.colors.black};
      font-size: 22px;
      display: inline-block;
      font-weight: 700;
    }
  }
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

export const TopButton = styled.img`
  width: 50px;
  height: 50px;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
