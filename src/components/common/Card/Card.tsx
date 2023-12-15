import React from 'react';
import { CardContainer } from './styled';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';

const Card = () => {
  return (
    <CardContainer>
      <CardHeader status={0} startDate="2023/12/15" />
      <CardContent reason="아이유 콘서트에 가고.." totalPrice={99000} />
    </CardContainer>
  );
};

export default Card;
