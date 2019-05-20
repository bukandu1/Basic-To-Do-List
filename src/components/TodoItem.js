import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
            return{
            //Check if completed is true, then cross out
            background: '#f6f6f6',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
            // if (this.props.todo.completed)
            // {
            //     return{
            //         textDecoration: 'line-through'
            //     }
            // }else{
            // return{
            //     textDecoration: 'none'
            // }
            // }
            
        }
    }
    

        //Can also be done in one line:
        //textDecoration = this.props.todo.completed ? 'line-thorough' = 'none'
    
    markComplete = (e) => {
        console.log(this.props)
    }
    render(){
        const { id, title } = this.props.todo; //Unpack variables
        return(
            <div style={this.getStyle()}>
                <p><input type='checkbox' onChange={this.props.markComplete.bind
                    (this,id)} /> {' '}
                {this.props.todo.title}
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//Shows how to 
const itemStyle = {
    backgroundColor: '#f4a5f4'
}
export default TodoItem