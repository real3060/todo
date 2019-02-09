import React from "react";
import ReactDOM from "react-dom";
import HeaderTitle from './components/header-title';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list'


const App = () => {
    const todoData = [
        { label: 'Learn React', important: true },
        { label: 'Do homework Sergei', important: false },
        { label: 'Create Awesome App', important: false }
    ];
    return (
        <div>
            <HeaderTitle/>
            <SearchPanel/>
            <TodoList todos={ todoData }/>
        </div>
    );
};

ReactDOM.render( <App/>, document.querySelector( '#root' ) );