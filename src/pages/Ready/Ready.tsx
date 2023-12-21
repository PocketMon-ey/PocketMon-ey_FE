import React from 'react';

// import ReadyJPG from '../../../src/assets/images/ready.jpg';
import { TitleHeader } from '../../components/feature';
import CollyReady from '../../components/common/CollyReady/CollyReady';

const Ready = () => {
  return (
    <>
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
