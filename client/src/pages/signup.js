import { useState} from "react";
import { useUserSignUpMutation } from "../store/services/authService";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const Signup = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      password: ''
    })
    const [signUpUser, response] = useUserSignUpMutation();
    const onChange = e =>{
      setState({...state, [e.target.name]: e.target.value});
    }
    const onSubmit = e => {
      e.preventDefault();
      signUpUser(state);
    }
    const onFinish = (values) => {
      signUpUser(values);
    }
    return(
        <>
          <div>
            <Form onFinish={onFinish} >
            <Title level={1} >USER SIGN UP</Title>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your Name!" }]}
              >
               <Input type="name" value={state.name} onChange={onChange}/>
              </Form.Item>  
              <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your Email!" }]}
              >
                <Input type="email" value={state.email} onChange={onChange}/>
              </Form.Item>
              <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your Password!" }]}
              >
                <Input type="Password" value={state.password} onChange={onChange}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SignUp
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
    )
}

export default Signup;