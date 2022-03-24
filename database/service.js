import taskdb from './task.database'
import resoursedb from './resourse.database'

const service = {
    task: {
        list: () => taskdb,
        get: id => taskdb.find(task => task.id === id),
        select: description => taskdb.find(task => task.description === description),
        post: task => taskdb.push(task),
        put: (id, task) => {
            const _task = taskdb.find(task => task.id === id)
            const index = taskdb.indexOf(_task);
            taskdb[index] = { ..._task, ...task}
            return taskdb[index]
        } 
    },
    resourse: {
        list: () => resoursedb,
        get: id => resoursedb.find(resourse => resourse.id === id),
        select: description => resoursedb.find(resourse => resourse.description === description),
        post: resourse => resoursedb.push(resourse),
        put: (id, resourse) => {
            const _resourse = resoursedb.find(resourse => resourse.id === id)
            const index = resoursedb.indexOf(_resourse);
            resoursedb[index] = { ..._resourse, ...resourse}
            return resoursedb[index]
        } 
    }
}

export default service;