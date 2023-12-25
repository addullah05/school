import { useState } from "react";
import { useCreateSchoolMutation, useGetSchoolsQuery } from "../store/services/schoolService";
import { Form, Input, Button } from "antd";

const Create = () => {
    const [createSchool] = useCreateSchoolMutation();
    const fetchSchools = useGetSchoolsQuery();
    const [form] = Form.useForm();

    const handle = (e) => {
        form.setFieldsValue({ ...form.getFieldsValue(), [e.target.name]: e.target.value });
    };

    const createNewSchool = async () => {
        try {
            await createSchool(form.getFieldsValue());
            form.resetFields();
            fetchSchools.refetch();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            
            <Form form={form} onFinish={createNewSchool}>
            <h2>Create New School</h2>
                <Form.Item name="school_name" label="School Name" rules={[{ required: true, message: "Please enter the school name" }]}>
                    <Input placeholder="School Name" onChange={handle} />
                </Form.Item>

                <Form.Item name="contact" label="Contact" rules={[{ required: true, message: "Please enter the contact information" }]}>
                    <Input placeholder="Contact" onChange={handle} />
                </Form.Item>

                <Form.Item name="principal_name" label="Principal Name" rules={[{ required: true, message: "Please enter the principal name" }]}>
                    <Input placeholder="Principal Name" onChange={handle} />
                </Form.Item>

                <Form.Item name="address" label="Address" rules={[{ required: true, message: "Please enter the address" }]}>
                    <Input placeholder="Address" onChange={handle} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create New School
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Create;
