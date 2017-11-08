import React, { Component } from 'react';
import { connect } from 'react-redux';
import taskActions from '../redux/taskActions';

// Stupid component can also have own state
class AddTaskFormPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  submit = () => {
    this.props.submit(this.state.input);
    this.setState({ input: '', });
  };

  render() {
    return <div>
      <h2>Add task:</h2>
      <input type="text" onChange={this.onInputChange} value={this.state.input}/>
      <button onClick={this.submit}>
        Add Task
      </button>
    </div>;
  }
}

const mapDipsatchToProps = (dispatch) => ({
  submit: title => dispatch(taskActions.addTask(title)),
});

// Pass empty object
const AddTaskForm = connect(() => ({}), mapDipsatchToProps)(AddTaskFormPresentation);

export default AddTaskForm;
