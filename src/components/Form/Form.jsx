import React, {useState} from 'react'
import './Form.scss'
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom"

const Form = () => {

    const [tasks, setTasks] = useState ([
        "Exercicios",
        "Limpar o carro",
    ])

    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function editTask(){

    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

  return (
    <section className='form' >
        <ul>
            {tasks.map((task, index)=>
                <li key={index} >

                    <p>{task}</p>

                    <div className="btns checkbutton">
                        <input type='checkbox'></input>
                    </div>

                    <div className="action-btns">
                        <button 
                        className='edit-btn' 
                        onClick={()=> editTask(index)} > <Link to={'/edit'}> <MdEdit /> </Link> </button>
                            
                        <button 
                        className='delete-btn' 
                        onClick={()=> deleteTask(index)} > <Link to={'/delete'}><FaTrash /></Link> </button>
                    </div>
                </li>
            )}
        </ul>
        
        
        <div className="add">
            <input 
                type="text" 
                placeholder='Nova Tarefa...' 
                value={newTask} 
                onChange={handleInputChange} 
            />
            <button className='add-btn' 
                onClick={addTask} ><FaPlus />
            </button>    
        </div>
        
        
    </section>
  )
}

export default Form