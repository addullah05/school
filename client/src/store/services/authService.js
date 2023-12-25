import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),

    endpoints: (builder) => {
        return{
            authLogin: builder.mutation({
                query: (LoginData) => {
                    return{
                        url: 'signin',
                        method: 'POST',
                        body: LoginData
                    }
                }
            }),
            userSignUp: builder.mutation({
                query: data => {
                    return{
                        url: '/signup',
                        method: 'POST',
                        body: data
                    }
                }
            })
        }
    }
});

export const {useAuthLoginMutation, useUserSignUpMutation} = authService;