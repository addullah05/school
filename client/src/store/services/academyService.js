import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const academyService = createApi({
    reducerPath: 'academies',
    tagTypes: ['academies'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),
    endpoints: (builder) => ({
        getAcademies: builder.query({
            query: () => ({
                url: 'academies',
                method: 'GET',
            }),
            providesTags: ['academies'],
        }),
        deleteAcademies: builder.mutation({
            query: (id) => ({
                url: `academy/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['academies']
        }),
        createAcademicYear: builder.mutation({
            query: (academic) => ({
                headers: {
                    'content-type': 'application/json',
                },
                url: 'academy',
                method: 'POST',
                body: academic
            }),
            invalidatesTags: ['academies'],

        })
    }),

});

export const {useGetAcademiesQuery, useDeleteAcademiesMutation, useCreateAcademicYearMutation} = academyService;