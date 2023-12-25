import React, { useEffect, useState } from "react";
import { useAuthLoginMutation } from "../store/services/authService";
import { useDispatch } from "react-redux";
import { setToken } from "../store/reducers/authReducers";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const UserLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [login, response] = useAuthLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("token", response?.data?.token);
      dispatch(setToken(response?.data?.token));
      navigate("/schools");
    }
  }, [response.isSuccess, dispatch, navigate]);

  const onFinish = (values) => {
    login(values);
  };

  return (
    <div className="login-main">
      
      <Form onFinish={onFinish} className="form">
      <Title level={1}>USER LOGIN</Title>
        <Form.Item
          label="Email"
          name="email"
          
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" className="email" value={state.email} onChange={handleInputs} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password type="password" value={state.password} onChange={handleInputs} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            LOGIN USER
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserLogin;
