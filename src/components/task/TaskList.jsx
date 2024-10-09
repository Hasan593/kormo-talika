/* eslint-disable react/prop-types */


const TaskList = ({tasks}) => {
    return (
        <>
            <div className="h-[490px] overflow-auto">
                <table className="hidden sm:table table-fixed">
                    <thead className="dark:bg-[#121A16] bg-slate-700 sticky top-0">
                        <tr>
                            <th className="p-6 text-white text-sm font-semibold capitalize w-[48px]"
                            ></th>
                            <th className="p-6 text-white text-sm font-semibold capitalize w-[300px]"
                            >Title</th>
                            <th className="p-6 text-white text-sm font-semibold capitalize md:w-[350px] w-full"
                            >Description</th>
                            <th className="p-6 text-white text-sm font-semibold capitalize md:w-[350px]"
                            >Tags</th>
                            <th className="p-6 text-white text-sm font-semibold capitalize md:w-[100px]"
                            >Priority</th>
                            <th className="p-6 text-white text-sm font-semibold capitalize md:w-[170px]"
                            >Options</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-white text-black even dark:[&>*:nth-child(even)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-200">
                        {
                            tasks.length > 0 ? 
                            tasks.map(task => (
                                <tr key={task.id}>
                                    <td>
                                        <button> ⁕ </button>
                                    </td>
                                    <td>
                                        {task.title}
                                    </td>
                                    <td className="text-justify">
                                        <div>{task.description}</div>
                                    </td>
                                    <td>
                                        <ul className="flex justify-center gap-1.5">
                                            {
                                                task.tags.map(tag => (
                                                    <li key={tag}>
                                                        <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-gray-700 bg-gray-600 px-3 py-1 text-sm capitalize text-white"
                                                        >{tag}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                    <td className="text-center text-black font-bold">
                                        {task.priority}
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <button className="bg-red-500 text-white px-3 py-1 rounded-md"
                                            >Delete</button>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                            >Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            )) : 
                            <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-32">
                                <td
                                className="text-white font-bold text-center text-2xl"
                                colSpan={6}
                                >No Tasks Found...</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TaskList;