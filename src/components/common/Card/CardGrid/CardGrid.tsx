import React, { useContext } from 'react';
import { CardGridContainer } from './styled';
import Card from '../Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoanListContext } from '../../../../context/context';

type Loan = {
  id: number;
  reason: string;
  price: number;
  startDate: string;
  status: number;
};

const CardGrid = ({ status }: { status: number }) => {
  const list = useContext(LoanListContext).filter(
    (loan: Loan) => loan.status === status,
  );
  return (
    <CardGridContainer>
      {list.map((loan: Loan) => (
        <Card
          key={loan.id}
          id={loan.id}
          reason={loan.reason}
          price={loan.price}
          startDate={loan.startDate}
          status={loan.status}
        />
      ))}
    </CardGridContainer>
  );
};

export default CardGrid;
