import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import { getTaskFormLocal, getThemeFormLocal } from "../../utils/localStorage";

const TaskBoardLayout = () => {

    // const defaultTask = {
    //     id: crypto.randomUUID(),
    //     title: 'Complete React Project',
    //     description: 'Finish the project and submit it by the end of the week',
    //     tags: ['React', 'Project', 'Deadline'],
    //     priority: 'High',
    //     isFavorite: false
    // };

    const [tasks, setTasks] = useState(getTaskFormLocal());
    // console.log(tasks)

    const [theme, setTheme] = useState(getThemeFormLocal());

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        document.documentElement.className= theme;
    }, [theme])

    const toggleTheme = () => setTheme(theme === 'dark' ? 'lightHasan' : 'dark');

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
         <Header toggleTheme={toggleTheme} theme={theme} />
         <div className="mt-30 bg-red-400 flex flex-col justify-center items-center w-full px-4 sm:px-6 py-6 md:py-8 ">
            <TaskBoard tasks={tasks} setTasks={setTasks}/>
         </div>   
         <Footer />
        </>
    );
};

export default TaskBoardLayout;