import React from 'react';
import { CardContainer } from './styled';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  reason: string;
  price: number;
  startDate: string;
  status: number;
};

const Card = ({ id, reason, price, startDate, status }: Props) => {
  const path = useLocation().pathname;
  const baseUrl = path.includes('parent')
    ? '/parent/loan/detail'
    : '/child/loan/detail';
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate(baseUrl);
      }}
    >
      <CardHeader status={status} startDate={startDate} />
      <CardContent reason={reason} totalPrice={price} />
    </CardContainer>
  );
};

export default Card;
