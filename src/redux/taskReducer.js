export const TASK_ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  REMOVE_TASK: 'REMOVE_TASK',
};


// Reducer takes an action and returns previous state or new state
// It is important not to modify state
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case TASK_ACTION_TYPES.ADD_TASK: {
      return state.concat({ title: action.title, completed: false });
    }

    case TASK_ACTION_TYPES.REMOVE_TASK: {
      return state.filter((e, index) => index !== action.index);
    }

    case TASK_ACTION_TYPES.TOGGLE_COMPLETED: {
      return state.map((todo, index) => {
        if (index !== action.index) {
          return todo;
        }

        return { ...todo, completed: !todo.completed };
      });
    }

    default:
      return state;
  }
};

export default taskReducer

