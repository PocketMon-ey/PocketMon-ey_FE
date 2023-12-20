import React from 'react';

// import ReadyJPG from '../../../src/assets/images/ready.jpg';
import { TitleHeader } from '../../components/feature';

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
        <img
          src={process.env.PUBLIC_URL + 'images/ready.jpg'}
          alt="준비중 이미지"
          width="220px"
          height="200px"
        />
      </div>
    </>
  );
};

export default Ready;
