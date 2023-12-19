import React from 'react';
import StatusDiv from '../StatusDiv/StatusDiv';
import { CardHeaderContainer, StartDateContainer } from './styled';
type Props = {
  status: number;
  startDate: string;
};

const CardHeader = ({ status, startDate }: Props) => {
  const statusToString = (num: number): string => {
    if (num === 0) {
      return '대기 중';
    } else if (num === 1) {
      return '진행 중';
    } else {
      return '완료';
    }
  };

  return (
    <CardHeaderContainer>
      <StatusDiv status={statusToString(status)}></StatusDiv>
      <StartDateContainer>{startDate}</StartDateContainer>
    </CardHeaderContainer>
  );
};

export default CardHeader;
