import { useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";

const TaskBoardLayout = () => {

    const defaultTask = {
        id: crypto.randomUUID(),
        title: 'Complete React Project',
        description: 'Finish the project and submit it by the end of the week',
        tags: ['React', 'Project', 'Deadline'],
        priority: 'High',
        isFavorite: false
    };

    const [tasks, setTasks] = useState([defaultTask]);
    // console.log(tasks)

    return (
        <>
         <Header />
         <div className="mt-32 bg-red-400 flex flex-col justify-center items-center w-full px-4 sm:px-6 py-6 md:py-8 ">
            <TaskBoard tasks={tasks} setTasks={setTasks}/>
         </div>   
         <Footer />
        </>
    );
};

export default TaskBoardLayout;