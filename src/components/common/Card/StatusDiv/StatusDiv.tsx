import React from 'react';
import { StatusContainer, StatusDivContainer } from './styled';
import { theme } from '../../../../styles';

type Props = {
  status: string;
};
const StatusDiv = ({ status }: Props) => {
  return (
    <StatusDivContainer>
      <StatusContainer>{status}</StatusContainer>
    </StatusDivContainer>
  );
};

export default StatusDiv;
