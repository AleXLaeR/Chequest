import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: process.env.BASE_URL });

const api = createApi({
  reducerPath: 'newsletterApi',
  tagTypes: ['Newsletter'],
  baseQuery,
  endpoints: (builder) => ({
    subscribeToNewsletter: builder.mutation<any, string>({
      query: (payload) => ({
        url: `api/newsletter`,
        method: 'POST',
        body: { email: payload },
      }),
      invalidatesTags: ['Newsletter'],
    }),
  }),
});

export const { useSubscribeToNewsletterMutation, ...newsletterApi } = api;
