import React, { useEffect, useState } from 'react';
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
  const [baseUrl, setBaseUrl] = useState('');
  const path = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (path.includes('parent')) {
      if (status === 0) setBaseUrl('/parent/loan/checkContract');
      else setBaseUrl('/parent/loan/detail');
    } else {
      if (status === 0) setBaseUrl('/child/loan/checkContract');
      else setBaseUrl('/child/loan/detail');
    }
  }, []);
  return (
    <CardContainer onClick={() => navigate(`${baseUrl}/${id}`)}>
      <CardHeader status={status} startDate={startDate} />
      <CardContent reason={reason} totalPrice={price} />
    </CardContainer>
  );
};

export default Card;
