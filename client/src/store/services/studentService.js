import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const studentService = createApi({
    reducerPath:'students',
    tagTypes: ['students'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => ({
                url: 'student',
                method: 'GET',
            }),
            providesTags: ['students'],
        }),
        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `student/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['students']
        }),
        createStudent: builder.mutation({
            query: (student) => ({
                headers: {
                    'content-type': 'application/json',
                },
                url: 'student',
                method: 'POST',
                body: student
            }),
            invalidatesTags: ['students'],
        })
    })
})

export const {useCreateStudentMutation, useDeleteStudentMutation, useGetStudentsQuery} = studentService;