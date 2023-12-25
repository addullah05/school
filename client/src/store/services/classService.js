import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const classService = createApi({
    reducerPath: 'classes',
    tagTypes: ['Classes'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),
    endpoints: (builder) => ({
        getClasses: builder.query({
            query: () => ({
                url: 'classes', // Matches with '/schools' route
                method: 'GET',
            }),
            providesTags: ['Classes'],
        }),
        deleteClass: builder.mutation({
            query: (id) => ({
                url: `class/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Classes']
        }),
        createClass: builder.mutation({
            query: (Class) =>({
                headers: {
                    'content-type': 'application/json',
                },
                url: 'class',
                method: 'POST',
                body: Class
            }),
            invalidatesTags: ['academies'],
        })
    }),
});

export const {useGetClassesQuery, useDeleteClassMutation, useCreateClassMutation} = classService;