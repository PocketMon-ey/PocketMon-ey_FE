import React from 'react';
import {
  CardContentContainer,
  ReasonContainer,
  TotalPriceContainer,
  TotalPriceSpanContainer,
} from './styled';
import AddButton from '../../Button/AddButton/AddButton';
import { useLoanService } from '../../../../core/loanService';

type Props = {
  reason: string;
  totalPrice: number;
};
const CardContent = ({ reason, totalPrice }: Props) => {
  const { addComma } = useLoanService();
  return (
    <CardContentContainer>
      <ReasonContainer>{reason}</ReasonContainer>
      <TotalPriceContainer>
        <TotalPriceSpanContainer>
          {addComma(totalPrice)}원
        </TotalPriceSpanContainer>
      </TotalPriceContainer>
    </CardContentContainer>
  );
};

export default CardContent;
