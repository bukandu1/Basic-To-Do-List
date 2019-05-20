import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  //Include state that will be used for all components. Different
  //components can also have their own state
  //JS Objects here (here it will be an array of objects. Can come from a db)
  state = {
    todos: [
      { id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the bathroom',
        completed: false
      },
      {
        id: 3,
        title: 'Walk the dog',
        completed: false
      }
    ]
  }

  render(){
    console.log(this.state.todos)
    return (
      //Cannot use class attribute for html
      <div className="App"> 
        <h1> Bev's App</h1>
        <Todos todos= {this.state.todos}/>
      </div>
    );
}
}


export default App;
