import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(-1);
    const [completedTodos, setCompletedTodos] = useState([])

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = () => {
        if (isEdit) {
            const updateTodo = [...todos];
            updateTodo[editId] = todo;
            setTodos(updateTodo);
            setIsEdit(false);
        } else {
            setTodos([...todos, todo]);
        }
        setTodo("");
    };

    const handleDelete = (i) => {
        setTodos(todos.filter((_, index) => index !== i));
    };

    const handleEdit = (todo, index) => {
        setTodo(todo);
        setIsEdit(true);
        setEditId(index);
    };

    // console.log(todos);
    const handleAddToComplete = (addedtodo) => {
        setCompletedTodos(prev => [...prev, addedtodo])
    }

    const handleRemoveCompleted = (index) => {
        setCompletedTodos(completedTodos.filter((_, i) => i !== index))
    }

    return (
        <>
            <div>
                <label>{isEdit ? "Edit" : "Add A Task"}</label>
                <input type="text" value={todo} onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div>
                <h3>Incomplete task</h3>
                {todos.map((res, i) => {
                    return (
                        <>
                            <li key={i}>{res}</li>
                            <button onClick={() => handleAddToComplete(res)}>complete</button>
                            <button onClick={() => handleEdit(res, i)}>edit</button>
                            <button onClick={() => handleDelete(i)}>delete</button>
                        </>
                    );
                })}
            </div>
            <div>
                <h3>Completed task</h3>
                {completedTodos.map((res, i) => {
                    return (
                        <>
                            <li key={i}>{res}</li>
                            <button onClick={() => handleRemoveCompleted(i)}>Remove</button>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Todo;
