import { useState } from "react";
import validator from "validator";
import { AuthFormInput, Button } from "../../../lib";
import { IRegister } from "../../../models";

interface UserCreateProps {
  registerUser: (user: IRegister) => void;
}

export function CreateUser({ registerUser }: UserCreateProps) {
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
    <>
      <button
        id="createModal"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#userCreateModal"
        style={{ display: "none" }}
      ></button>
      <div
        className="modal fade"
        id="userCreateModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "15px" }}>
            <button
              id="closeCreateModal"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ display: "none" }}
            ></button>
            <div
              className="card bg-white text-center py-3"
              style={{ borderRadius: "15px" }}
            >
              <div
                className="card border-0 p-2 mx-4"
                style={{ borderRadius: 15 }}
              >
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
                    <Button
                      className="mt-3"
                      type="primary"
                      size="sm"
                      loading={loading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
