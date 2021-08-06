import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { findUserById, userIsExisted } from "../../../helper/user";
import { Button } from "../../../lib";
import { IRegister } from "../../../models";
import { actionCreators } from "../../../redux";
import { CreateUser } from "../create-user/create-user";
import { UserDetail } from "../user-detail/user-detail";
import { UsersTable } from "./users-table";
import styles from "./users.module.css";

export function Users() {
  const { users } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { deleteUser, addUser } = bindActionCreators(actionCreators, dispatch);
  const [userDetail, setUserDetail] = useState({
    id: "",
    username: "",
    mobile: "",
    email: "",
    avatar: "",
  });

  const userDetailModal = () => {
    return <UserDetail {...userDetail} />;
  };

  const handleUserDetail = async (id: number) => {
    const user = await findUserById(users, id);
    setUserDetail(user);
    document.getElementById("detailModal")?.click();
  };

  const userCreateModal = () => {
    return <CreateUser registerUser={registerUser} />;
  };

  const handleCreateUser = () => {
    document.getElementById("createModal")?.click();
  };

  const registerUser = async (user: IRegister) => {
    const result = await userIsExisted(users, user);
    if (result) return alert("username has alredy signed up!");
    addUser(user);
    document.getElementById("closeCreateModal")?.click();
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">
          <div className="row d-flex justify-content-between">
            <div className="col">
              <p
                className={`text-primary ms-2 fw-bold text-start ${styles.listCaptionStyle}`}
              >
                List of users
              </p>
            </div>
            <div className="col">
              <p className="text-primary ms-2 fw-bold text-end">
                <Button
                  onClick={handleCreateUser}
                  type="success"
                  size="sm"
                  className="px-3"
                >
                  Create user
                </Button>
              </p>
            </div>
          </div>
          <UsersTable
            users={users}
            handleUserDetail={handleUserDetail}
            handleDeleteUser={handleDeleteUser}
          />
          {userDetailModal()}
          {userCreateModal()}
        </div>
      </div>
    </div>
  );
}
