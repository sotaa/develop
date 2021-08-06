import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { useHistory } from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import { ILogin, IRegister } from "../../models";
import { findUser, userIsExisted } from "../../helper/user";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();
  const { users } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { setUser, addUser } = bindActionCreators(actionCreators, dispatch);

  const registerUser = async (user: IRegister) => {
    const result = await userIsExisted(users, user);
    if (result) return alert("username has alredy signed up!");
    setUser(user);
    addUser(user);
    history.push("/");
  };

  const loginUser = async (credential: ILogin) => {
    const result = await findUser(users, credential);
    if (result) {
      setUser(result);
      history.push("/");
    } else {
      alert("user not found");
    }
  };

  const handleRendering = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-5">
        {isLogin ? (
          <Login handleRendering={handleRendering} loginUser={loginUser} />
        ) : (
          <Register
            handleRendering={handleRendering}
            registerUser={registerUser}
          />
        )}
      </div>
    </div>
  );
}

export default Auth;
