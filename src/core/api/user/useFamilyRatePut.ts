import { userServiceAxiosInstance } from '../axios';

export const putFamilyRate = async (inputValue: number) => {
  const { data } = await userServiceAxiosInstance.put(`/user/FR`, {
    id: 1,
    interestRate: inputValue,
  });
  return data;
};

export const fetchFamilyRate = () => userServiceAxiosInstance.get(`/user/FR/1`);

export const getRate = () => userServiceAxiosInstance.get('/user/IR/1');
