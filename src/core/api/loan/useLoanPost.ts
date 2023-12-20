export interface ItemsPostResponse {
  data: {
    itemIds: number[];
  };
}

export type ItemsRequest = {
  id?: number;
  title: string | null;
  brand: string | null;
  category: string;
};
// export const postLoan = async (storeId: number, items: ItemsRequest[]) => {
//   const response = await pumpClientRequester<ItemsPostResponse>({
//     method: HTTP_METHOD.POST,
//     url: `${storeId}${index}`,
//     headers: {
//       Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
//     },
//     data: items,
//   });

//   return response.data.data;
// };
