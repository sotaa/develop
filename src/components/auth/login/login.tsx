import { AuthFormInput, Button, SwitchLoginRegister } from "../../../lib";
import { useState } from "react";
import { ILogin } from "../../../models/auth";

export interface LoginProps {
  handleRendering: () => void;
  loginUser: (user: ILogin) => void;
}

export function Login({ handleRendering, loginUser }: LoginProps) {
  const [data, setData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name === "username") {
      if (value.length < 4) {
        errors.username = "Minimum length is 4 character!";
      } else {
        errors.username = "";
      }
    }
    if (name === "password") {
      if (value.length < 4) {
        errors.password = "Minimum length is 4 character!";
      } else {
        errors.password = "";
      }
    }
    setErrors(errors);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = (errors: { username: string; password: string }) => {
    let valid = true;
    Object.values(errors).forEach(
      (val: string) => val.length > 0 && (valid = false)
    );
    if (!data.username || !data.password) {
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);
      const credential = {
        username: data.username,
        password: data.password,
      };
      loginUser(credential);
      setLoading(false);
    } else {
      alert("please enter the information correctly!");
    }
  };
  return (
    <div className="card border-0 p-4 mx-4" style={{ borderRadius: 15 }}>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="form-group mb-3 text-start">
          <AuthFormInput
            labelContent="username"
            error={errors.username}
            name="username"
            type="text"
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3 text-start">
          <AuthFormInput
            labelContent="password"
            error={errors.password}
            name="password"
            type="password"
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          <Button className="mt-3" type="primary" size="sm" loading={loading}>
            Login
          </Button>
        </div>
      </form>
      <div className="mx-2 mb-2 text-center">
        <SwitchLoginRegister
          content="Sign Up"
          description="Don't have an account? "
          handleRendering={handleRendering}
        />
      </div>
    </div>
  );
}

export default Login;
