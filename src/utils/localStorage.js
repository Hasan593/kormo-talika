export const getTaskFormLocal = ()=>{
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks) || [];
};