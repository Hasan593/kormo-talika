/* eslint-disable react/prop-types */

import { useState } from "react";

const TaskModal = ({onSave, isTaskUpdate, handleCloseClick }) => {

    const defaultObject = {
        id: crypto.randomUUID(),
        title: "",
        description: '',
        tags: [],
        priority: '',
        isFavorite: false
    };
    
    const [task, setTask] = useState(isTaskUpdate || defaultObject);
    // console.log(task)

    const [isAdd] = useState(Object.is(isTaskUpdate, null));
    // const isAdd = isTaskUpdate ? false : true;

    const [errors, setErrors] = useState({});
    
    const validateForm = ()=>{
        const newErrors = {};
        if (!task.title.trim()) {
            newErrors.titleHasan = "Title is required"  
        }
        if (!task.description.trim()) {
            newErrors.description = "Drescription is required"  
        }
        if (!task.tags.length) {
            newErrors.tags = "At least one tag is required"  
        }else if(task.tags.length > 3){
            newErrors.tags = 'maximum 3 tags are allowed'
        }
        if (!task.priority) {
            newErrors.priority = "Priority is required"  
        }
        return newErrors;
    };

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
        // console.log(task)
        const test = validateForm();
        Object.keys(test).length > 0 ? setErrors(test) 
        // Object.keys(validateForm()).length > 0 ? setErrors(validateForm()) // 57 & 58 লাইন বাদ দিয়ে শুধু এভাবে করলেউ হবে
        :
        onSave(task, isAdd);
    };

    return (
        <>
            <div 
            className="fixed inset-0 w-full min-h-screen bg-black bg-opacity-85 z-[100] flex items-center justify-center"
            onClick={handleCloseClick}
            >
                <form
                className="z-50 w-full max-w-xs sm:max-w-md md:max-w-lg bg-gray-700 dark:bg-[#262B28] border border-[#fefbfb]/[36%] dark:border-gray-600 rounded-lg p-8 space-y-6 overflow-auto max-h-full"
                onClick={e=>e.stopPropagation()}
                >
                    
                    <h2 className="text-center text-2xl font-bold text-white">
                        {isAdd ?
                        'আপনার কর্ম তালিকা তৈরি করুন' 
                        :
                        'আপনার কর্ম তালিকা সংশোধন করুন'
                        }
                    </h2>

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
                            {
                            errors.titleHasan && <p className="text-red-600 font-bold">{errors.titleHasan}</p>
                            }
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
                        {
                            errors.description && <p className="text-red-600 font-bold">{errors.description}</p>
                        }
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
                            {
                            errors.tags && <p className="text-red-600 font-bold">{errors.tags}</p>
                            }
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
                            {
                            errors.priority && <p className="text-red-600 font-bold">{errors.priority}</p>
                            }
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between">
                        <button
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        type='button'
                        onClick={handleCloseClick}
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