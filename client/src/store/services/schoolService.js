import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const schoolService = createApi({
    reducerPath: 'schools',
    tagTypes: ['schools'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),
    endpoints: (builder) => ({
        getSchools: builder.query({
            query: () => ({
                url: 'schools', // Matches with '/schools' route
                method: 'GET',
            }),
            providesTags: ['schools'],
        }),
        
        createSchool: builder.mutation({
            query: (school) => ({
                headers: {
                    'Content-type': 'application/json',
                },
                url: 'school', // Matches with '/school' route
                method: 'POST',
                body: school
            }),
            invalidatesTags: ['schools'],
        }),
        deleteSchool: builder.mutation({
            query: (id) => ({
                url:`school/${id}`, // Matches with '/school/:id' route
                method: 'DELETE',
            }),
            invalidatesTags: ['schools'],
        }),
    }),
});

export const {
    useGetSchoolsQuery,
    useCreateSchoolMutation,
    useDeleteSchoolMutation,
} = schoolService;
