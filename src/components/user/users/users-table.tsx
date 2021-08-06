import { IUser } from "../../../models";
import styles from "./users.module.css";

interface UsersTableProps {
  users: IUser[];
  handleDeleteUser: (id: number) => void;
  handleUserDetail: (id: number) => void;
}

export function UsersTable({
  users,
  handleDeleteUser,
  handleUserDetail,
}: UsersTableProps) {
  return (
    <table
      className={`table table-borderless caption-top table-hover text-start shadow-sm ${styles.tableStyle}`}
    >
      <thead className="border-bottom">
        <tr>
          <th scope="col" className="text-muted fw-light">
            <span className="ps-2 ps-md-4">username</span>
          </th>
          <th scope="col" className="text-muted fw-light">
            mobile
          </th>
        </tr>
      </thead>
      <tbody className="border-0">
        {users.map((user: IUser, index: number) => {
          return (
            <>
              <tr key={index} className={`${styles.trStyle}`}>
                <td
                  onClick={() => handleUserDetail(user.id)}
                  className={`${styles.usernameStyle}`}
                >
                  <span className="ps-2 ps-md-4"> {user.username}</span>
                </td>
                <td onClick={() => handleUserDetail(user.id)}>{user.mobile}</td>
                <td className={`${styles.deleteItem}`}>
                  <i
                    className={`bi bi-trash-fill text-danger ${styles.deleteTask}`}
                    onClick={() => handleDeleteUser(user.id)}
                  ></i>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
