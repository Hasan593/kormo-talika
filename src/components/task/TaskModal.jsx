import { useState } from "react";

const TaskModal = () => {

    const defaultObject = {
        id: crypto.randomUUID(),
        title: "",
        description: '',
        tags: [],
        priority: '',
        isFavorite: false
    };
    
    const [task, setTask] = useState(defaultObject);

    const handleChange = e => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === 'tags') {
            value = value.split(',')
        };

        setTask({
            ...task,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(task)
    }

    return (
        <>
            <div className="fixed inset-0 w-full min-h-screen bg-black bg-opacity-85 z-[100] flex items-center justify-center">
                <form className="z-50 w-full max-w-xs sm:max-w-md md:max-w-lg bg-gray-700 dark:bg-[#262B28] border border-[#fefbfb]/[36%] dark:border-gray-600 rounded-lg p-8 space-y-6 overflow-auto max-h-full">
                    
                    <h2 className="text-center text-2xl font-bold text-white">আপনার কর্ম তালিকা তৈরি করুন</h2>

                    <div className="space-y-6 text-white">
                        <div className="space-y-2">
                            <label htmlFor="title">Title</label>
                            <input
                            className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 bg-gray-200 px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={task.title}
                            onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                        className="block min-h-[120px] w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                        type='text'
                        name="description"
                        id="description"
                        value={task.description}
                        onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 space-y-6 md:space-y-0">
                        <div className="space-y-2">
                            <label htmlFor="tags">Tags</label>
                            <input
                            className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                            type="text"
                            name="tags"
                            id="tags"
                            value={task.tags.join(',')}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="priority">Priority</label>
                            <select
                            className="block w-full cursor-pointer rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-500"
                            name="priority"
                            id="priority"
                            value={task.priority}
                            onChange={handleChange}
                            >
                                <option className="bg-stone-900" value="">Select Priority</option>
                                <option className="bg-stone-900" value="Low">Low</option>
                                <option className="bg-stone-900" value="Medium">Medium</option>
                                <option className="bg-stone-900" value="High">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between">
                        <button
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        type='button'
                        >
                        Close
                        </button>
                        <button
                        type="submit"
                        onClick={handleSubmit}
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TaskModal;