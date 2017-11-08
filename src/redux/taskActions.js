import { TASK_ACTION_TYPES } from './taskReducer';

const taskActions = {
  addTask: title => ({ type: TASK_ACTION_TYPES.ADD_TASK, title }),
  removeTask: (index) => ({ type: TASK_ACTION_TYPES.REMOVE_TASK, index }),
  toggleCompleted: (index) => ({ type: TASK_ACTION_TYPES.TOGGLE_COMPLETED, index }),
};

export default taskActions;