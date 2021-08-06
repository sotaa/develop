import { TaskTypes } from "../types";
import { tasks } from "../states";

const taskReducer = (state = tasks, action: { type: string; payload: any }) => {
  let newTasks;
  if (action.type === TaskTypes.SET_TASK) {
    newTasks = [...state];
    newTasks.push(action.payload);
    return newTasks;
  } else if (action.type === TaskTypes.DEL_TASK) {
    newTasks = [...state];
    newTasks = newTasks.filter((task) => task.id !== action.payload);
    return newTasks;
  } else if (action.type === TaskTypes.EDIT_TASK) {
    newTasks = [...state];
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].id === action.payload.id) {
        newTasks[i].title = action.payload.title;
        newTasks[i].description = action.payload.description;
        break;
      }
    }
    return newTasks;
  } else if (action.type === TaskTypes.DONE_TASK) {
    newTasks = [...state];
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].id === action.payload) {
        newTasks[i].done = !newTasks[i].done;
        break;
      }
    }
    return newTasks;
  }
  return state;
};

export default taskReducer;
