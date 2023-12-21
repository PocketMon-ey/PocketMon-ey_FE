import React from 'react';

// import ReadyJPG from '../../../src/assets/images/ready.jpg';
import { TitleHeader } from '../../components/feature';
import CollyReady from '../../components/common/CollyReady/CollyReady';
import { Header } from '../../components/common';

const Ready = () => {
  return (
    <>
      <Header headerTitle=""></Header>
      <TitleHeader title="준비중입니다.." firstS="" secondS=""></TitleHeader>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CollyReady />
      </div>
    </>
  );
};

export default Ready;
