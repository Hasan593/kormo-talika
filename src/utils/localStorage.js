export const getTaskFormLocal = ()=>{
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks) || [];
};

export const getThemeFormLocal = ()=>{
    const theme = localStorage.getItem('theme');
    return theme || 'dark';
};