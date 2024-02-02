import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import "react-toastify/dist/ReactToastify.css";
import { toastSuccess, toastError } from "../../utils/toast";
import axios from "axios";
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
  btnRegister: () => void;
};
const Login = ({ btnRegister }: FieldType) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const handleLogin = async (): Promise<void> => {
    try {
      const emailExists = await axios.get(
        `http://localhost:3006/User/?email=${email}`
      );
      const passExists = await axios.get(
        `http://localhost:3006/User/?password=${pass}`
      );
      if (emailExists.data.length > 0 && passExists.data.length > 0) {
        toastSuccess("Đã đăng nhập thành công");
      } else {
        toastError("Email hoặc mật khẩu chưa chính xác !");
      }
    } catch (error) {
      toastError("Đã xảy ra lỗi");
    }
  };

  const handleRegisterClick = () => {
    btnRegister();
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Login
        </Button>
        <Button className="registerBtn" onClick={handleRegisterClick}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
