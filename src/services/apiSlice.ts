// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface TicketPurchase {
//   name: string
//   email: string
//   ticketType: string
// }

// export const ticketApi = createApi({
//   reducerPath: 'ticketApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://our-lady-database.onrender.com/api/' }),
//   endpoints: (builder) => ({
//     initializePayment: builder.mutation<any, TicketPurchase>({
//       query: (ticketData) => ({
//         url: "buyTickets",
//         method: "POST",
//         body: ticketData,
//       }),
//     }),
//     verifyPayment: builder.query({
//       query: (reference) => `verify-payment/${reference}`,
//     }),
//     buyTickets: builder.mutation({
//       query: (ticketData) => ({
//         url: 'buyTickets',
//         method: 'POST',
//         body: ticketData,
//       }),
//     }),
//   }),
// });

// export const { useInitializePaymentMutation, useVerifyPaymentQuery, useBuyTicketsMutation } = ticketApi;