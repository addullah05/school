import React from "react";
import { Space, Button, Table, Tag } from "antd";
import { useDeleteTeacherMutation, useGetTeachersQuery } from "../store/services/teacherService";

const Teachers = () => {
    const { data = [] } = useGetTeachersQuery(); // Corrected: Added parentheses to useGetTeachersQuery
    console.log(data);
    const [deleteTeacher] = useDeleteTeacherMutation();

    const handleDelete = async (id) => {
        try {
            await deleteTeacher(id);
        } catch (error) {
            console.error("Failed to delete teacher", error); // Corrected: Added semicolon at the end
        }
    };

    const columns = [
        {
            title: 'Teacher Name',
            dataIndex: 'full_name',
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'date_of_birth',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Contact Information',
            dataIndex: 'contact_information',
        },
        {
            title: 'Subjects Taught',
            dataIndex: 'subjects_taught',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (teacher) => (
                <Button size="small" onClick={() => handleDelete(teacher._id)} danger>Delete</Button>
            ),
        },
    ];

    return (
        <>
            <div>
                <div>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </>
    );
};

export default Teachers;
