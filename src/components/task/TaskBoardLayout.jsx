import Footer from "../shared/Footer";
import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";

const TaskBoardLayout = () => {
    return (
        <>
         <Header />
         <div className="mt-32 bg-red-400 flex flex-col justify-center items-center">
            <TaskBoard />
         </div>   
         <Footer />
        </>
    );
};

export default TaskBoardLayout;