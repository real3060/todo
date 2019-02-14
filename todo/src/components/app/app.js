import React from "react";
import ReactDOM from "react-dom";
import HeaderTitle from '../header-title';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';


const App = () => {
    const todoData = [
        { label: 'Learn React', important: true, id: 1 },
        { label: 'Do homework Sergei', important: false, id: 2 },
        { label: 'Create Awesome App', important: false, id: 3 }
    ];
    return (
        <div>
            <HeaderTitle/>
            <SearchPanel/>
            <TodoList todos={ todoData }/>
        </div>
    );
};
export default App;
ReactDOM.render( <App/>, document.querySelector( '#root' ) );