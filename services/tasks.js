import query from "../db/index.js"

export async function getTasks(){
    const result = await query('SELECT * FROM tasks;');
    return result.rows;
}

export async function getTaskById(id){
    const result = await query('SELECT * FROM tasks WHERE id = $1;', [id]);
    return result.rows;
}

export async function addNewTask(task){
    console.log(task)
    await query('INSERT INTO tasks(task, deadline, priority, starred, status) VALUES ($1, $2, $3, $4, $5);', [task.task, task.deadline, task.priority, task.starred, task.status]);
    return task;
}

export async function deleteTask(id){
    const deletedTask = await query('SELECT * FROM tasks WHERE id = $1', [id]);
    await query('DELETE FROM tasks WHERE id = $1;', [id]);
    return deletedTask.rows[0];
}