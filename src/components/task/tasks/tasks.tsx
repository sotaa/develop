import { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";
import { ITask } from "../../../models";
import { Button } from "../../../lib";
import { TaskItem } from "../task-item/task-item";
import styles from "./tasks.module.css";
import { TaskDetail } from "../task-detail/task-detail";
import { CreateTaskForm } from "../create-task/create-task-form";

export function Tasks() {
  const tasks = useSelector((state: any) => state.task);
  const [taskFormData, setTaskFormData] = useState({
    title: "",
    description: "",
  });
  const [taskDetailData, setTaskDetailData] = useState({
    id: 0,
    title: "",
    description: "",
    date: "",
    done: false,
  });
  const [errors] = useState({ title: "", description: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();
  const { doneTask, deleteTask, setTask, editTask } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleSubmitNewModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(errors)) {
      const data = {
        id: isEditMode ? taskDetailData.id : Date.now(),
        title: taskFormData.title,
        description: taskFormData.description,
        date: new Date(),
        done: isEditMode ? taskDetailData.done : false,
      };

      isEditMode ? editTask(data) : setTask(data);

      document.getElementById("closeAddModal")?.click();
      setTaskFormData({ title: "", description: "" });
    } else {
      alert("please enter the information correctly!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setTaskFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = (errors: { title: string; description: string }) => {
    let valid = true;
    Object.values(errors).forEach(
      (val: string) => val.length > 0 && (valid = false)
    );
    if (!taskFormData.title || !taskFormData.description) {
      valid = false;
    }
    return valid;
  };

  const handleDoneTask = (id: number) => {
    doneTask(id);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  const handleDetailModal = (id: number) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        setTaskDetailData((state) => ({ ...state, ...tasks[i] }));
        break;
      }
    }
    document.getElementById("detailModal")?.click();
  };

  const handleEditTask = () => {
    document.getElementById("closeDetailModal")?.click();
    setTaskFormData(taskDetailData);
    setIsEditMode(true);
    document.getElementById("addModal")?.click();
  };

  const taskDetailModal = () => {
    return <TaskDetail {...taskDetailData} handleEditTask={handleEditTask} />;
  };

  const handleShowAddModal = () => {
    setIsEditMode(false);
    setTaskFormData({ title: "", description: "" });
    document.getElementById("addModal")?.click();
  };

  const addTaskModal = () => {
    return (
      <CreateTaskForm
        {...taskFormData}
        isEditMode={isEditMode}
        handleInputChange={handleInputChange}
        handleSubmitNewModal={handleSubmitNewModal}
      />
    );
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <Button
            type="primary"
            size="sm"
            className="px-4"
            onClick={handleShowAddModal}
          >
            new task
          </Button>
        </div>
      </div>
      {addTaskModal()}
      {taskDetailModal()}
      <div className="row  px-2 d-flex justify-content-center">
        {tasks.map((task: ITask, index: string) => {
          return (
            <div
              className={`col-12 col-md-7 shadow my-2 bg-white ${styles.itemWrapper}`}
              key={index}
            >
              <TaskItem
                {...task}
                handleDetailModal={handleDetailModal}
                handleDoneTask={handleDoneTask}
                handleDeleteTask={handleDeleteTask}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
