import React, { useState } from "react";
import { TaskCategoryItem } from "../../Models/TaskCategoryItem";
import { SideBar } from "../SideBar/SideBar";
import { TaskList } from "../Tasks/TaskList";

const ToDoApp = () =>
{
    const tempCategoryList = [
        new TaskCategoryItem("1", "Today", "red", 0, true, "BookmarkBorderIcon"),
        new TaskCategoryItem("2", "Inbox", "red", 0, false, "InboxIcon")
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
