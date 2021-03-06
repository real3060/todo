import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? "bold" : 'normal'
    };
    return (
        <div className='todo-list-item'>
            <span className="todo-list-item-label" style={ style }>{ label }</span>


            <div className="button-wrapper">
                <button type='button'
                        className='btn btn-outline-success btn-sm'>
                    <i className='fa fa-exclamation'></i>
                </button>
                <button type='button' className='btn btn-outline-danger btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
            </div>
        </div>
    )
};

export default TodoListItem;