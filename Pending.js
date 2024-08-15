import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css'
import './App.css';
import Navbar from './Navbar'

const PendingTasks = () => {
    const [pendingTasks, setPendingTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/pending')
            .then(result => setPendingTasks(result.data))
            .catch(err => console.log(err));
        
    }, []);
  

    return (
        <main>
          
            <h1 className="pendingh2">Pending Tasks</h1>
            <ul className='pending'>
                
                {pendingTasks.map((task) => (
                    <li key={task._id}>
                        {task.task} - {new Date(task.deadline).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default PendingTasks;
