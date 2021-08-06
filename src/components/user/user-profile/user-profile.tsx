import { useState, useEffect } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import defaultAvatar from "../../../assets/avatar.png";
import { actionCreators } from "../../../redux";
import { UserInformation } from "./user-information";

export function UserProfile() {
  const { currentUser } = useSelector((state: any) => state.user);
  const [data, setData] = useState({
    id: 0,
    username: "",
    password: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({ password: "", email: "", mobile: "" });
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const { setUser, editUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setData((state) => ({ ...state, ...currentUser }));
  }, [currentUser]);

  const handleEditMode = () => {
    setIsEditMode(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "email") {
      if (!validator.isEmail(value)) {
        errors.email = "enter email correctly!";
      } else {
        errors.email = "";
      }
    }

    if (name === "mobile") {
      if (!validator.isMobilePhone(value, "fa-IR")) {
        errors.mobile = "enter mobile number correctly!";
      } else {
        errors.mobile = "";
      }
    }

    if (name === "password") {
      if (value.length > 0 && value.length < 4) {
        errors.password = "Minimum length is 4 character!";
      } else {
        errors.password = "";
      }
    }
    setErrors(errors);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = (errors: { email: string; mobile: string }) => {
    let valid = true;
    Object.values(errors).forEach(
      (val: string) => val.length > 0 && (valid = false)
    );

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(errors)) {
      const userData = {
        id: currentUser.id,
        username: currentUser.username,
        email: data.email ? data.email : currentUser.email,
        password: data.password,
        mobile: data.mobile ? data.mobile : currentUser.mobile,
      };
      setUser(userData);
      editUser(userData);
      setIsEditMode(false);
    } else {
      alert("please enter the information correctly!");
    }
  };

  return (
    <div className="container">
      <h5 className="mb-4">Profile</h5>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div
            className="card bg-white text-center py-3"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body">
              <div className="row d-flex justify-content-center">
                <div className="col-8 col-md-5 mb-3">
                  <img
                    src={
                      currentUser.avatar ? currentUser.avatar : defaultAvatar
                    }
                    className="img-fluid rounded-circle w-75"
                    alt="..."
                  />
                </div>
                <UserInformation
                  {...data}
                  isEditMode={isEditMode}
                  errors={errors}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  handleEditMode={handleEditMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
