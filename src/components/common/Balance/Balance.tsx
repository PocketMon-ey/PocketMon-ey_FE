import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { userServiceAxiosInstance } from '../../../core/api/axios';
import { BalanceContainer } from '../../../pages/LoanDetail/styled';
import { theme } from '../../../styles';
import { useLoanService } from '../../../core/loanService';

const Balance = ({ id }: { id: number }) => {
  const { addComma } = useLoanService();
  const fetchBalance = async () =>
    await userServiceAxiosInstance.get(`/user/${id}`).then((res) => {
      return res.data.balance;
    });

  const { data, error } = useQuery({
    queryKey: ['balance'],
    queryFn: () => fetchBalance(),
  });
  return (
    <BalanceContainer>
      <div style={{ fontSize: '15px', color: theme.colors.gray_003 }}>
        포켓모니 연결계좌
      </div>
      <div style={{ fontSize: '20px' }}>{addComma(parseInt(data))}원</div>
    </BalanceContainer>
  );
};

export default Balance;
