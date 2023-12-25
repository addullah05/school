import React from "react";
import { useDeleteSchoolMutation, useGetSchoolsQuery } from "../store/services/schoolService";
import { useDeleteClassMutation, useGetClassesQuery } from "../store/services/classService";
import { Space,Button, Table, Tag } from 'antd';


const Classes = () => {
    const { data = [], isLoading } = useGetClassesQuery();
    const [deleteClass] = useDeleteClassMutation();

    const handleDelete = async (id) => {
        try {
            await deleteClass(id);
        } catch (error) {
            console.error(error)
        }
    }
    const columns = [
    
        {
            title:'Class Name',
            dataIndex: 'class_name',
            key: 'Class Name',
            render: (text) => <a>{text}</a>
        },
        {
            title:'Class Teacher',
            dataIndex:'class_teacher',
            key: 'Class Teacher',
        },
        {
            title: 'Students In Class ',
            dataIndex: 'student_in_class',
            key: 'Students In Class ',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (Class) => (
                <Button size="small" onClick={() => handleDelete(Class._id)} danger>Delete</Button>
            )
        },
    
    
    
    ]
    return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
    );
};

export default Classes;
