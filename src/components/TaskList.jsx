import React from 'react';
import { connect } from 'react-redux';
import taskActions from '../redux/taskActions';


// Stupid component, just takes props and displays it
const Task = ({ task, toggleCompleted, remove }) => (
  <div className={task.completed ? 'Task--completed' : 'Task'}>
    <h2>{task.title}</h2>
    <button onClick={remove}>Remove</button>
    <button onClick={toggleCompleted}>{task.completed ? 'mark as todo' : 'mark as completed'}</button>
  </div>
);

// Stupid component
const TaskListPresentation = ({ tasks, remove, toggleCompleted }) => (


  <div>
    <h1>My tasks ({tasks.length})</h1>
    {
      tasks.map((task, index) =>
        <Task
          key={index}
          task={task}
          remove={() => remove(index)}
          toggleCompleted={() => toggleCompleted(index)}
        />,
      )
    }
  </div>
);

// Unpack state and pass it as props to stupid component
const mapStateToProps = state => ({
  tasks: state.task,
});

// Get actions and pass them as props to stupid component
const mapDispatchToProps = dispatch => ({
  remove: index => dispatch(taskActions.removeTask(index)),
  toggleCompleted: index => dispatch(taskActions.toggleCompleted(index)),
});

// Connected component
const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListPresentation);

export default TaskList;