import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9009/api'
    }),
    tagTypes:['Orders'],
    endpoints: (builder) => ({
        fetchOrdersHistory: builder.query({
            query: () => '/pizza/history',
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: (body) => ({
                url: '/pizza/order',
                method: "POST",
                body,
            }),
            invalidatesTags: ["Orders"]
        })
    })
})

export const { useFetchOrdersHistoryQuery, useCreateOrderMutation } = orderApi