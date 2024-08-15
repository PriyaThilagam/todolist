import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const Create = () => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');

    const createTask = () => {
        axios.post('http://localhost:5000/add', { task: task.trim(), deadline })
            .then(result => {
                console.log(result.data);
                window.location.reload();
                setTask('');
                setDeadline('');
            })
            .catch(err => console.log(err));
    };

    return (
        <main>
            <h1>Todo List</h1>
            <div className='create-form'>
                <input
                    type='text'
                    placeholder='Enter a task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <input
                    type='date'
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                />
                <button onClick={createTask}>ADD</button>
            </div>
        </main>
    );
};

export default Create;
