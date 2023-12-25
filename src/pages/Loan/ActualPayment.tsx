import { styled } from 'styled-components';
import { TitleHeader } from '../../components/feature';
import { theme } from '../../styles';
import type { RadioChangeEvent } from 'antd';
import { Radio, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { StyledDetail } from '../../components/feature/ContentBackground/styled';
import { BigButton, Header } from '../../components/common';
import { StyledButtonBottom } from './ApplyLoan';
import { ReactComponent as Ccoli } from '../../assets/images/ccoli_recommend.svg';
import { useLoanService } from '../../core/loanService';
import {
  loanServiceAxiosInstance,
  userServiceAxiosInstance,
} from '../../core/api/axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { loanApplyStore } from '../../store/loanApplyStore';
import { TableItem, postTableList } from '../../core/api/loan/useTableListPost';
import { useNavigate } from 'react-router-dom';
import { fetchFamilyRate } from '../../core/api/user/useFamilyRatePut';
import { fetchPrimeRate } from '../../core/api/user/usePrimeRatePut';

type Props = {
  familyrate: number;
  primerate: number;
};

const ActualPayment = () => {
  const [tableItem, setTableItem] = useState<TableItem[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(3);
  const { addComma } = useLoanService();
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const { price, changeValue, loanInterest } = loanApplyStore();

  const fetchRate = async () =>
    await axios.all([fetchFamilyRate(), fetchPrimeRate()]).then(
      axios.spread((res1, res2) => {
        const response1 = res1.data;
        const response2 = res2.data;

        const res = { familyrate: response1, primerate: response2 };
        changeValue('loanInterest', response1 - response2);
        return res;
      }),
    );

  const { data, isLoading, error } = useQuery<Props>({
    queryKey: ['rate'],
    queryFn: () => fetchRate(),
    refetchInterval: false,
  });
  const tableList = postTableList(loanInterest, price);
  useEffect(() => {
    if (loanInterest !== 0)
      tableList.then((data) => {
        setTableItem(data);
      });
  }, [loanInterest]);

  useEffect(() => {
    if (tableItem.length > 0) {
      changeValue('pricePerMonth', tableItem[1].pricePerMonth);
      changeValue('totalPrice', tableItem[1].totalPrice);
    }
  }, [tableItem]);

  return (
    <>
      <Header headerTitle="대출 신청" />
      <TitleHeader
        title="대출기간을 선택하세요"
        firstS="대출 기간에 따라 이자가 변화합니다."
        secondS="납입금액 확인 후, 적절한 기간을 선택해주세요."
      />
      {tableItem.length > 0 && (
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
                <Radio
                  id="1"
                  value={1}
                  onClick={() => {
                    changeValue('pricePerMonth', tableItem[0].pricePerMonth);
                    changeValue('totalPrice', tableItem[0].totalPrice);
                  }}
                >
                  <StyledSelectItem>
                    <span>1개월</span>
                    <span>{addComma(tableItem[0].pricePerMonth)}원</span>
                    <span>{addComma(tableItem[0].totalPrice)}원</span>
                  </StyledSelectItem>
                </Radio>
                <Radio
                  id="3"
                  value={3}
                  onClick={() => {
                    changeValue('pricePerMonth', tableItem[1].pricePerMonth);
                    changeValue('totalPrice', tableItem[1].totalPrice);
                  }}
                  defaultChecked
                >
                  <StyledSelectItem>
                    <span>3개월</span>
                    <span>{addComma(tableItem[1].pricePerMonth)}원</span>
                    <span>{addComma(tableItem[1].totalPrice)}원</span>
                  </StyledSelectItem>
                  <StyledCcoli />
                </Radio>
                <Radio
                  id="6"
                  onClick={() => {
                    changeValue('pricePerMonth', tableItem[2].pricePerMonth);
                    changeValue('totalPrice', tableItem[2].totalPrice);
                  }}
                  value={6}
                >
                  <StyledSelectItem>
                    <span>6개월</span>
                    <span>{addComma(tableItem[2].pricePerMonth)}원</span>
                    <span>{addComma(tableItem[2].totalPrice)}원</span>
                  </StyledSelectItem>
                </Radio>
              </StyledFlexContainer>
            </Radio.Group>
          </ConfigProvider>
          <StyledDetailInformation>
            <span>
              {'김지훈'}님의 현재 대출금리는 {loanInterest}% 입니다.
            </span>
            <p>
              * 대출금리: 가족금리 {data?.familyrate}% - 우대금리{' '}
              {data?.primerate}%
            </p>
          </StyledDetailInformation>
        </StyledBackground>
      )}

      <BigButton
        onClick={() => {
          navigate('/child/loan/checkContract');
          changeValue('period', value);
        }}
        text="다음"
      />
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
