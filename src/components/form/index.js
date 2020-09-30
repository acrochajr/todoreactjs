import React from "react";
import {FormBtn, Form, Task, FormGroup, FormField, Link, Error} from "./styles"
import {useFormik} from 'formik'
import * as Yup from 'yup'
import useLocalStorage from "../../hooks/userLocalStorage";

export default function TodoForm() {

    const [todos, setTodos] = useLocalStorage("todos", []);

    const {handleSubmit, handleChange, values, errors, handleBlur} = useFormik({
        initialValues: {
            newTodo: ''
        },
        validationSchema: Yup.object({
            newTodo: Yup.string()
                .min(5, 'A task deve conter mais de 5 caracteres!')
        }),
        onSubmit: ({newTodo}, {resetForm}) => {
            if (newTodo) {
                setTodos([...todos, {id: Math.floor(Math.random() * 100), task: newTodo}]);
            }
            resetForm();
        }
    });

    const handleOrderList = (() => {
        setTodos(todos.sort((taskA, taskB) => taskA['task'] > taskB['task'] ? 1 : -1));
    })

    const handleRemoveTodo = ((id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    });


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormField id="newTodo" onChange={handleChange} onBlur={handleBlur}
                           name="newTodo" value={values.newTodo} placeholder="Todo" type="text"/>
                <FormBtn type="submit">ADICIONAR </FormBtn>
                <FormBtn type="submit" onClick={handleOrderList}>ORDENAR LISTA</FormBtn>
            </FormGroup>
            {errors.newTodo ? (
                <Error>{errors.newTodo}</Error>
            ) : null}
            {todos.map((todo) => (
                <Link href="#" key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
                    <Task>
                        {todo.task}
                    </Task></Link>
            ))}
        </Form>
    )
}
