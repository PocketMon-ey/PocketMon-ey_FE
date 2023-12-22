import React, { useEffect, useState } from 'react';
import { Header } from '../../components/common';
import { loanServiceAxiosInstance } from '../../core/api/axios';
import { useLocation } from 'react-router-dom';
import { TitleHeader } from '../../components/feature';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Info = {
  rejectReason: string;
};

const Complete = () => {
  const path = useLocation().pathname;

  const [loanInfo, setLoanInfo] = useState<Info>();
  useEffect(() => {
    const pathList = path.split('/');
    axios
      .get(
        `${process.env.REACT_APP_LOAN_BASE_URL}/loan/${parseInt(
          pathList[pathList.length - 1],
        )}`,
      )
      .then((res) => {
        console.log(res.data);
        setLoanInfo(res.data);
      });
  }, []);
  return (
    <div>
      <Header headerTitle="" />
      {loanInfo && (
        <TitleHeader
          title={
            loanInfo.rejectReason ? '대출이 반려되었습니다..' : '대출 완납!'
          }
          firstS={
            loanInfo.rejectReason
              ? '대출 반려 사유는 다음과 같습니다'
              : '대출 완납!'
          }
          secondS={
            loanInfo.rejectReason ? loanInfo.rejectReason : '축하드립니다!'
          }
        />
      )}
    </div>
  );
};

export default Complete;
