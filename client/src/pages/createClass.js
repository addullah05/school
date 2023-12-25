import { useState } from "react";
import { useCreateClassMutation, useGetClassesQuery } from "../store/services/classService";
import { Form, Input, Button } from "antd";

const Class = () => {
  const [createClass] = useCreateClassMutation();
  const fetchedClass = useGetClassesQuery();
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    await createClass(values);
    fetchedClass.refetch();
    form.resetFields();
  };

  return (
    <div className="container">
     
      <Form form={form} onFinish={handleFinish} className="class">
      <h2>CREATE NEW CLASS</h2>
        <Form.Item
          name="class_name"
          label="Class Name"
          rules={[{ required: true, message: "Please enter the class name" }]}
        >
          <Input placeholder="CLASS NAME....." />
        </Form.Item>

        <Form.Item
          name="class_teacher"
          label="Class Teacher"
          rules={[{ required: true, message: "Please enter the class teacher" }]}
        >
          <Input placeholder="CLASS TEACHER....." />
        </Form.Item>

        <Form.Item
          name="student_in_class"
          label="Students in Class"
          rules={[{ required: true, message: "Please enter the number of students in class" }]}
        >
          <Input placeholder="STUDENTS IN CLASS......" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Class
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Class;
