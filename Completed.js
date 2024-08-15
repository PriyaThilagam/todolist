import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css'
import './App.css';
import Navbar from './Navbar'

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/completed')
            .then(result => setCompletedTasks(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <main>
           
            <h1>Completed Tasks</h1>
            <ul className='completed'>
                {completedTasks.map((task) => (
                    <li key={task._id}>
                        {task.task} - {new Date(task.deadline).toLocaleDateString()}
                        <br/>
                    </li> 
                  
                ))
                
                }
            </ul>
        </main>
    );
};

export default CompletedTasks;
