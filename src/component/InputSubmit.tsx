import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputSubmit: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <Form className="d-flex form" style={{ width: '40%', margin: 'auto' }} onSubmit={handleAdd}>
            <FormControl
                type="search"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button type='submit' variant="outline-success">Search</Button>
        </Form>
    );
};

export default InputSubmit;