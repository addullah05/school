import React from "react";
import { useDeleteAcademiesMutation, useGetAcademiesQuery } from "../store/services/academyService";
import { useGetClassesQuery } from "../store/services/classService";
import { useGetSchoolsQuery } from "../store/services/schoolService";
import { Space,Button, Table, Tag } from 'antd';

const Academies = () => {
    const { data = [], isLoading, error } = useGetAcademiesQuery();
     const [deleteAcademy] = useDeleteAcademiesMutation();

    const handleDelete = async (id) => {
        try {
            await deleteAcademy(id); // Call deleteSchool with the correct id
        } catch (error) {
            console.error("Failed to delete school:", error);
        }
    };

    const columns = [
        {
          title: 'Start Date',
          dataIndex: 'start_date',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'End Date',
          dataIndex: 'end_date',
          key: 'age',
        },
        {
          title: 'Action',
          key: 'operation',
          render:(academy) => (
            <Button size="small" onClick={() => handleDelete(academy._id)} danger>Delete</Button>
          )
        },
       
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
      ];
    return (
        <div className="container">
            <div>
            <Table columns={columns} dataSource={data} />;
            </div>
        </div>
    );
};

export default Academies;