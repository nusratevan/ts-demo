import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Todo } from './modal'
import SingleTodo from './SingleTodo'


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            <Container>
                <Row xs={12} sm={12} md={12} lg={3} style={{ marginTop: "50px" }}>
                    {todos.map((todo) => (
                        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />

                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default TodoList