import { styled } from 'styled-components';
import { TitleHeader } from '../../components/feature';
import { theme } from '../../styles';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import { StyledDetail } from '../../components/feature/ContentBackground/styled';
import { BigButton } from '../../components/common';
import { StyledButtonFlexContainer } from './CheckContract';

const ActualPayment = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <TitleHeader
        title="대출기간을 선택하세요"
        firstS="대출 기간에 따라 이자가 변화합니다."
        secondS="납입금액 확인 후, 적절한 기간을 선택해주세요."
      />
      <StyledBackground>
        <StyledRadio>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </StyledRadio>
        <StyledDetailInformation>
          <span>
            {'김지훈'}님의 현재 대출금리는 {3}% 입니다.
          </span>
          <p>
            * 대출금리: 가족금리 {5}% - 우대금리 {2}%
          </p>
        </StyledDetailInformation>
      </StyledBackground>

      <BigButton text="다음" />
    </>
  );
};
export default ActualPayment;
const StyledDetailInformation = styled(StyledDetail)`
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${theme.colors.primary_purple};
  & > span {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
  & > p {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
  }
`;
const StyledRadio = styled.div`
  span::after {
    border: 1px solid ${theme.colors.primary_purple};
  }
  .ant-radio-checke::before {
    border: 1px solid ${theme.colors.primary_purple};
    border-color: ${theme.colors.primary_purple};
    background-color: ${theme.colors.white};
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${theme.colors.primary_purple};
    background-color: ${theme.colors.primary_purple};
  }
  .ant-wave-target {
    border-color: ${theme.colors.primary_purple};
    background-color: ${theme.colors.primary_purple};
  }
  .ant-radio-checked::after {
    border: none;
  }
`;
const StyledBackground = styled.section`
  height: fit-content;
  width: 100vw;
  position: relative;
  background-color: ${theme.colors.white};
  margin: 0;
  padding: 20px 30px;
  right: 0;
  left: -30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
