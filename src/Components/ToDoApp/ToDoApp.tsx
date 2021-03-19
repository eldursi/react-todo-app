import React, { useState } from "react";
import { TaskCategoryItem } from "../../Models/TaskCategory";
import { SideBar } from "../SideBar/SideBar";
import { TaskList } from "../Tasks/TaskList";

const ToDoApp = () =>
{
    const tempCategoryList = [
        new TaskCategoryItem("1", "test 1", "red", 1, false),
        new TaskCategoryItem("2", "test 2", "green", 10, false),
        new TaskCategoryItem("3", "test 3", "blue", 6, false),
        new TaskCategoryItem("4", "test 4", "purple", 3, false),
    ]
    const [taskCategories, setTaskCategories] =  useState(tempCategoryList) // this will be used to add a task category
    const [tasks, setTasks] =  useState({}) // this will be used to add a task to a task category
    return(
        <>
            <SideBar taskCategories={taskCategories} setTaskCategories={setTaskCategories}/>
            <TaskList tasks={tasks} setTasks={setTasks} />   
        </>
    )
}

export default ToDoApp;
