/* eslint-disable react/prop-types */

import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTasksFound from "./NoTasksFound";

const TaskBoard = ({tasks, setTasks, displayTasks, searchTerm}) => {

    const [showModal, setShowModal] = useState(false);

    const [isTaskUpdate, setIsTaskUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd)=>{
        if (isAdd) {
            setTasks([...tasks, newTask])
        } else {
            setTasks(
                tasks.map(task => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        };
        handleCloseClick();
    };
    
    const handleEditTask = task => (setIsTaskUpdate(task), setShowModal(true));



    // const saveModal = newTask =>
    //     (newTask ? (setShowModal(false), setTasks([...tasks, newTask])) : 
    //     setShowModal(false));

    const handleDeleteTask = taskId => {
            const taskAfterDelete = tasks.filter(task => task.id !== taskId);
            setTasks(taskAfterDelete);
    };
    // const handleDeleteTask = taskId => {
    //     if (taskId) {
    //         const taskAfterDelete = tasks.filter(task => task.id !== taskId);
    //         setTasks(taskAfterDelete);
    //     } else {
    //         setTasks([]);
    //     };
    // };
    // const handleDeleteAll = ()=> setTasks([]); // delete all এর কাজ এই ফাংশান দিয়েও করা যাবে।

    const handleDeleteAllClick = ()=>setTasks([]);

    const handleFavorite = taskId => {
        const updateTasks = tasks.map(task =>{
            if(task.id === taskId){
                return {...task, isFavorite: !task.isFavorite}
            } else {
                return task
            };
        });
        setTasks(updateTasks);
    };

    const handleCloseClick = ()=>(setShowModal(false), setIsTaskUpdate(null))

    return (
        <>
            <section className="mt-16 md:mt-20" id="tasks">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-xl sm:text-2xl md:text-3xl text-center font-semibold">
                        <h1 className="text-green-700 dark:text-white"
                        >আপনার কর্ম তালিকা তৈরি করুন</h1>
                    </div>
                    <div className="rounded-lg border dark:border-[rgba(206,206,206,0.12)] border-gray-400 dark:bg-[rgba(38,43,40,0.6)] bg-gray-300 backdrop-filter backdrop-blur-lg shadow-lg px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 md:py-10 lg:py-12">
                        {/* <TaskList tasks={tasks}/> */}

                        {
                            displayTasks.length > 0 || searchTerm ? 
                            <TaskList
                            tasks={displayTasks}
                            handleFavorite={handleFavorite} 
                            handleDeleteTask={handleDeleteTask} 
                            handleAddEditTask={handleEditTask}
                            /> : 
                            <NoTasksFound /> 
                        }
                        
                        <TaskActions 
                        handleDeleteAllClick={handleDeleteAllClick}
                        datalength={tasks.length <= 0}
                        handleModalOn={()=>setShowModal(true)} 
                        />
                    </div>
                </div>
            </section>
            {
                showModal && (<TaskModal 
                    onSave={handleAddEditTask}
                    handleCloseClick={handleCloseClick}
                    isTaskUpdate={isTaskUpdate}
                    />)
            }
        </>
    );
};

export default TaskBoard;