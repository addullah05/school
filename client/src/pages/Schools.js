import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDeleteSchoolMutation, useGetSchoolsQuery } from "../store/services/schoolService";
import { Space,Button, Table, Tag } from 'antd';

const columns = [
    {
        title:'School Name',
        dataIndex: 'school_name',
        key: 'School Name',
        render: (text) => <a>{text}</a>
    },
    {
        title:'Principal Name',
        dataIndex:'principal_name',
        key: 'Principal Name',
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'Contact',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        
    },
    {
        title: 'Action',
        key: 'operation',
        render: (school) => (
            <Button size="small" danger>Delete</Button>
        )
    },



]

const Schools = () => {
    const { data = []} = useGetSchoolsQuery();
    const [deleteSchool] = useDeleteSchoolMutation();

    const handleDelete = async (id) => {
        try {
            await deleteSchool(id); // Call deleteSchool with the correct id
        } catch (error) {
            console.error("Failed to delete school:", error);
        }
    };

    const columns = [
        {
            title:'School Name',
            dataIndex: 'school_name',
            key: 'School Name',
            render: (text) => <a>{text}</a>
        },
        {
            title:'Principal Name',
            dataIndex:'principal_name',
            key: 'Principal Name',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'Contact',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            
        },
        {
            title: 'Action',
            key: 'operation',
            render: (school) => (
                <Button size="small" onClick={() => handleDelete(school._id)} danger>Delete</Button>
            )
        },
    
    
    
    ]
    

    return (
        <>
            <div className="container">
                <div>
                    
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </>
    );
};

export default Schools;
