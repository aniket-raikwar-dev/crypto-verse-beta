import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '21d65a5c87mshd7a56e79ec0552ap1988a3jsn0c5fe959e062'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
        query: (uuid) => createRequest(`/coin/${uuid}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ uuid, timePeriod }) => createRequest(`/coin/${uuid}/history/${timePeriod}`),
      })
    })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;





// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '21d65a5c87mshd7a56e79ec0552ap1988a3jsn0c5fe959e062'
//   }
// };