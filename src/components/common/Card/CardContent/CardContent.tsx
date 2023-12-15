import React from 'react';
import {
  CardContentContainer,
  ReasonContainer,
  TotalPriceContainer,
  TotalPriceSpanContainer,
} from './styled';
import AddButton from '../../Button/AddButton/AddButton';

type Props = {
  reason: string;
  totalPrice: number;
};
const CardContent = ({ reason, totalPrice }: Props) => {
  return (
    <CardContentContainer>
      <ReasonContainer>{reason}</ReasonContainer>
      <TotalPriceContainer>
        <TotalPriceSpanContainer>{totalPrice}원</TotalPriceSpanContainer>
      </TotalPriceContainer>
    </CardContentContainer>
  );
};

export default CardContent;
