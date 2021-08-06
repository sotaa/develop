import { ITask } from "../../../models";
import styles from "./task-item.module.css";

export interface TaskItemProps extends ITask {
  handleDetailModal: (id: number) => void;
  handleDoneTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function TaskItem({
  id,
  title,
  done,
  handleDetailModal,
  handleDoneTask,
  handleDeleteTask,
}: TaskItemProps) {
  return (
    <div className="row">
      <div
        className={`col-10 ps-5 text-start ${styles.taskTitle}`}
        style={{
          textDecoration: done ? "line-through" : "none",
          color: done ? "#818181" : "",
        }}
        onClick={() => handleDetailModal(id)}
      >
        {title}
      </div>
      <div className="col-2 pe-4 pe-md-5 d-flex align-items-center justify-content-end">
        <div className="form-check">
          <input
            className={`form-check-input ${styles.doneCheckbox}`}
            type="checkbox"
            defaultChecked={done}
            id="flexCheckDefault"
            onClick={() => handleDoneTask(id)}
          />
        </div>
        <div className="pt-1">
          <i
            className={`bi bi-trash-fill text-danger ${styles.deleteTask}`}
            onClick={() => handleDeleteTask(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
