import React from 'react'
import { Todo } from './modal';
import { BsXLg } from "react-icons/bs";


type props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: props) => {
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <>

            <div className='todo-test' >
                <span>{todo.todo}</span>
                <span className='button' onClick={() => { handleDelete(todo.id) }}><BsXLg /></span>
            </div>

        </>
    )
}

export default SingleTodo;