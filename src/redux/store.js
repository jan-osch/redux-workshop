import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import taskReducer from './taskReducer';
import taskActions from './taskActions';
import articleReducer from './articleReducer';

const saveState = state => localStorage.setItem('state', JSON.stringify(state));
const loadState = () => {
  const state = localStorage.getItem('state');
  return state ? JSON.parse(state) : null;
};

const store = createStore(
  combineReducers({
    task: taskReducer,
    article: articleReducer,
  }),

  applyMiddleware(thunk),
  // composeWithDevTools(applyMiddleware(thunk)), // uncomment to enable cool extension


  // loadState()
);


// store.subscribe(() => saveState(store.getState()));



// // Basic usage
// console.log('initial state', store.getState());
//
// // Create listener to every change
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState()),
// );
//
// // Manually dispatch actions
// store.dispatch(taskActions.addTask('Add monitoring to cloud'));
// store.dispatch(taskActions.addTask('Adds integration test to Analytics'));
// store.dispatch(taskActions.addTask('Add code coverage measurement to Analytics'));
// store.dispatch(taskActions.removeTask(0));
// store.dispatch(taskActions.toggleCompleted(1));
//
// // Release listener
// unsubscribe();


export default store;
