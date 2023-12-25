import React from "react";
import { Space, Button, Table, Tag } from "antd";
import { useDeleteStudentMutation, useGetStudentsQuery } from "../store/services/studentService";

const Students = () => {
    const { data = [] } = useGetStudentsQuery(); // Corrected: Added parentheses to useGetTeachersQuery
    console.log(data);
    const [deleteStudent] = useDeleteStudentMutation();

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id);
        } catch (error) {
            console.error("Failed to delete Student", error); // Corrected: Added semicolon at the end
        }
    };

    const columns = [
        {
            title: 'Student Name',
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
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Contact Information',
            dataIndex: 'contact_information',
        },
        {
            title: 'Class Enrolled',
            dataIndex: 'class_enrolled',
        },
        {
            title: 'Parent Guardian Name',
            dataIndex: 'parent_guardian_name',
        },
        {
            title: 'Parent Guardian Contact',
            dataIndex: 'parent_guardian_contact',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (student) => (
                <Button size="small" onClick={() => handleDelete(student._id)} danger>Delete</Button>
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

export default Students;
