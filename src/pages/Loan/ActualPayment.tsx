import { styled } from 'styled-components';
import { TitleHeader } from '../../components/feature';
import { theme } from '../../styles';
import type { RadioChangeEvent } from 'antd';
import { Radio, ConfigProvider } from 'antd';
import { useState } from 'react';
import { StyledDetail } from '../../components/feature/ContentBackground/styled';
import { BigButton } from '../../components/common';
import { StyledButtonBottom } from './ApplyLoan';
import { ReactComponent as Ccoli } from '../../assets/images/ccoli_recommend.svg';
import { useLoanService } from '../../core/loanService';

const ActualPayment = () => {
  const [value, setValue] = useState(3);
  const { addComma, submitLoanApply } = useLoanService();
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
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                colorPrimary: `${theme.colors.primary_purple}`,
                borderRadius: 2,
                radioSize: 20,
              },
            },
          }}
        >
          <Radio.Group size="large" onChange={onChange} value={value}>
            <StyledFlexContainer>
              <StyledSelectItem id="category">
                <span id="category">개월</span>
                <span id="category">월 납입금액</span>
                <span id="category">총 납입금액</span>
              </StyledSelectItem>
              <Radio id="1" value={1}>
                <StyledSelectItem>
                  <span>1개월</span>
                  <span>{addComma(99000)}원</span>
                  <span>{addComma(99000)}원</span>
                </StyledSelectItem>
              </Radio>
              <Radio id="3" value={3} defaultChecked>
                <StyledSelectItem>
                  <span>3개월</span>
                  <span>{addComma(33400)}원</span>
                  <span>{addComma(100200)}원</span>
                </StyledSelectItem>
                <StyledCcoli />
              </Radio>
              <Radio id="6" value={6}>
                <StyledSelectItem>
                  <span>6개월</span>
                  <span>{addComma(16000)}원</span>
                  <span>{addComma(101400)}원</span>
                </StyledSelectItem>
              </Radio>
            </StyledFlexContainer>
          </Radio.Group>
        </ConfigProvider>
        <StyledDetailInformation>
          <span>
            {'김지훈'}님의 현재 대출금리는 {3}% 입니다.
          </span>
          <p>
            * 대출금리: 가족금리 {5}% - 우대금리 {2}%
          </p>
        </StyledDetailInformation>
      </StyledBackground>

      <StyledButtonBottom>
        <BigButton text="다음" />
      </StyledButtonBottom>
    </>
  );
};
export default ActualPayment;
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 60px;
  & > #category {
    margin-left: 28px;
  }
`;
const StyledCcoli = styled(Ccoli)`
  position: absolute;
  bottom: 55%;
`;
const StyledSelectItem = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-left: 10px;
  & > span#category {
    color: ${theme.colors.black};
    font-size: 20px;
    font-weight: 700;
    align-self: center;
  }
  & > span {
    color: ${theme.colors.gray_004};
    font-size: 20px;
    font-weight: 700;
    display: inline-block;
    margin: 0;
  }
`;
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
