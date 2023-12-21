import React from 'react';

// import ReadyJPG from '../../../src/assets/images/ready.jpg';
import { TitleHeader } from '../../components/feature';
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
      ></div>
    </>
  );
};

export default Ready;
