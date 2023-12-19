import React from 'react';

import ReadyImage from '../../assets/images/Ready.png';
import { TitleHeader } from '../../components/feature';
import { Header } from '../../components/common';

const Ready = () => {
  return (
    <>
      <Header headerTitle="" />
      <TitleHeader title="준비중입니다.." firstS="" secondS=""></TitleHeader>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={ReadyImage}
          alt="준비중 이미지"
          width="330px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Ready;
