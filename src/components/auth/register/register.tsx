import { AuthFormInput, Button, SwitchLoginRegister } from "../../../lib";
import { useState } from "react";
import validator from "validator";
import { IRegister } from "../../../models";

export interface RegisterProps {
  handleRendering: () => void;
  registerUser: (user: IRegister) => void;
}

export function Register({ handleRendering, registerUser }: RegisterProps) {
  const [data, setData] = useState({ password: "", mobile: "", username: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    mobile: "",
    username: "",
  });

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
    if (name === "mobile") {
      if (!validator.isMobilePhone(value, "fa-IR")) {
        errors.mobile = "enter mobile number correctly!";
      } else {
        errors.mobile = "";
      }
    }

    setErrors(errors);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = (errors: {
    username: string;
    password: string;
    mobile: string;
  }) => {
    let valid = true;
    Object.values(errors).forEach(
      (val: string) => val.length > 0 && (valid = false)
    );
    if (!data.username || !data.password || !data.mobile) {
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);
      const credential = {
        id: Date.now(),
        username: data.username,
        mobile: data.mobile,
        password: data.password,
      };
      registerUser(credential);
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
            labelContent="mobile"
            error={errors.mobile}
            name="mobile"
            type="text"
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-4 text-start">
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
            Sign Up
          </Button>
        </div>
      </form>
      <div className="mx-2 mb-2 text-center">
        <SwitchLoginRegister
          content="      Login"
          description="Have an account? "
          handleRendering={handleRendering}
        />
      </div>
    </div>
  );
}

export default Register;
