import React from 'react';

import ReadyWebp from '../../../src/assets/images/Ready.webp';
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
          src={ReadyWebp}
          alt="준비중 이미지"
          width="220px"
          height="200px"
          decoding="async"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Ready;
