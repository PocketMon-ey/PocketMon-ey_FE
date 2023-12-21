import React, { useContext } from 'react';
import { CardGridContainer } from './styled';
import Card from '../Card';
import { LoanListContext } from '../../../../context/context';
import { loanServiceAxiosInstance } from '../../../../core/api/axios';
import { useQuery } from '@tanstack/react-query';

type Loan = {
  id: number;
  reason: string;
  price: number;
  startDate: string;
  status: number;
};

const CardGrid = ({ status }: { status: number }) => {
  const fetchLoanList = async () =>
    await loanServiceAxiosInstance
      .get(`/loan/list/${status}`)
      .then((res) => res.data);

  const { data, isLoading, error } = useQuery({
    queryKey: [`loan${status}`],
    queryFn: () => fetchLoanList(),
  });

  if (isLoading) {
    return <div>Loading중</div>;
  }

  if (error) {
    return <div>에러!!</div>;
  }
  // const list = useContext(LoanListContext).filter(
  //   (loan: Loan) => loan.status === status,
  // );
  return (
    <CardGridContainer>
      {data.loanList.map((loan: Loan) => (
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
