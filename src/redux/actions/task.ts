import { Dispatch } from "react";
import { ITask } from "../../models";
import { TaskTypes } from "../types";

export function setTask(task: ITask) {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: TaskTypes.SET_TASK,
      payload: task,
    });
  };
}

export function deleteTask(taskId: number) {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: TaskTypes.DEL_TASK,
      payload: taskId,
    });
  };
}

export function editTask(task: ITask) {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: TaskTypes.EDIT_TASK,
      payload: task,
    });
  };
}

export function doneTask(taskId: number) {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: TaskTypes.DONE_TASK,
      payload: taskId,
    });
  };
}
