import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const  baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token =  localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builder) =>({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: `/`,
                method: "POST",
                body: newOrder
            }),
            invalidatesTags: ["Orders"]
        }),
        getOrderByEmail: builder.query({
            query: (email) => `/email/${email}`,
            providesTags: ["Orders"]
        })
    })
})

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
export default ordersApi;