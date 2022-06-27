import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
   'x-bingapis-sdk': 'true',
   'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
   'x-rapidapi-key':
   '21d65a5c87mshd7a56e79ec0552ap1988a3jsn0c5fe959e062'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi', 
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;











// var options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '21d65a5c87mshd7a56e79ec0552ap1988a3jsn0c5fe959e062'
//   }
// };
