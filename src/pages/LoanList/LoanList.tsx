import React, { useEffect, useState } from 'react';
import { AddButton, Header, TabBar, UserTab } from '../../components/common';
import CardGrid from '../../components/common/Card/CardGrid/CardGrid';
import { AddButtonContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { userServiceAxiosInstance } from '../../core/api/axios';
import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Balance from '../../components/common/Balance/Balance';

type Props = {
  familyrate: number;
  primerate: number;
};

const LoanList = () => {
  const [status, setStatus] = useState<number>(0); // 임의로 0으로 해놓음

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const fetchFamilyRate = () => userServiceAxiosInstance.get(`/user/FR/1`);

  const fetchPrimeRate = () => userServiceAxiosInstance.get(`/user/PIR/2`);

  const fetchRate = async () =>
    await axios.all([fetchFamilyRate(), fetchPrimeRate()]).then(
      axios.spread((res1, res2) => {
        const response1 = res1.data;
        const response2 = res2.data;

        const res = { familyrate: response1, primerate: response2 };
        return res;
      }),
    );
  // const result = useQueries({
  //   queries: [
  //     { queryKey: ['familyrate'], queryFn: () => fetchFamilyRate() },
  //     { queryKey: ['primerate'], queryFn: () => fetchPrimeRate() },
  //   ],
  // });

  const { data, isLoading, error } = useQuery<Props>({
    queryKey: ['rate'],
    queryFn: () => fetchRate(),
  });

  return (
    <>
      <div>
        <Header headerTitle="대출 목록" />
        <UserTab familyrate={data?.familyrate} primerate={data?.primerate} />
        <TabBar status={status} setStatus={setStatus} />
        <Balance id={path.includes('child') ? 2 : 1} />
        <CardGrid status={status} />
        <AddButtonContainer onClick={() => navigate('/child/loan/apply')}>
          {path.includes('child') ? <AddButton></AddButton> : <></>}
        </AddButtonContainer>
      </div>
    </>
  );
};

export default LoanList;
