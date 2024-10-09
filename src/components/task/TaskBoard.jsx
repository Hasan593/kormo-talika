/* eslint-disable react/prop-types */

import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = ({tasks}) => {
    return (
        <>
            <TaskList tasks={tasks}/>
            <TaskActions />
        </>
    );
};

export default TaskBoard;