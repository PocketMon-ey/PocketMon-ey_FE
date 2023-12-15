import React from 'react';
import StatusDiv from '../StatusDiv/StatusDiv';
import { CardHeaderContainer, StartDateContainer } from './styled';
import { theme } from '../../../../styles';
type Props = {
  status: number;
  startDate: string;
};

const CardHeader = ({ status, startDate }: Props) => {
  return (
    <CardHeaderContainer>
      <StatusDiv status={status}></StatusDiv>
      <StartDateContainer>{startDate}</StartDateContainer>
    </CardHeaderContainer>
  );
};

export default CardHeader;
