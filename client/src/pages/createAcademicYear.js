import { useState } from "react";
import { useCreateAcademicYearMutation, useGetAcademiesQuery } from "../store/services/academyService";
import { Form, Input, Button, DatePicker } from "antd";
import moment from "moment";

const Academic = () => {
  const [academicYear] = useCreateAcademicYearMutation();
  const fetchAcademic = useGetAcademiesQuery();
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    const { start_date, end_date } = values;
    await academicYear({ start_date, end_date });
    fetchAcademic.refetch();
    form.resetFields();
  };

  return (
    <>
      <div className="container">
       
        <Form form={form} onFinish={handleFinish} className="academy">
          <h2>CREATE NEW ACADEMIC YEAR</h2>
          <Form.Item name="start_date" label="Start Date" rules={[{ required: true, message: "Please select start date!" }]}>
            <DatePicker style={{ width: "300px" }} format="YYYY/MM/DD" />
          </Form.Item>

          <Form.Item name="end_date" label="End Date" rules={[{ required: true, message: "Please select end date!" }]}>
            <DatePicker style={{ width: "300px" }} format="YYYY/MM/DD" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Academic Year
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Academic;