import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const teacherService = createApi({
    reducerPath:'teachers',
    tagTypes: ['teachers'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/api'
    }),
    endpoints: (builder) => ({
        getTeachers: builder.query({
            query: () => ({
                url: 'teachers',
                method: 'GET',
            }),
            providesTags: ['teachers'],
        }),
        deleteTeacher: builder.mutation({
            query: (id) => ({
                url: `teacher/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['teachers']
        }),
        createTeacher: builder.mutation({
            query: (teacher) => ({
                headers: {
                    'content-type': 'application/json',
                },
                url: 'teacher',
                method: 'POST',
                body: teacher
            }),
            invalidatesTags: ['teachers'],
        })
    })
})

export const {useCreateTeacherMutation, useDeleteTeacherMutation, useGetTeachersQuery} = teacherService;