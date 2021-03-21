import React, { useState } from "react";
import { Task, status } from "../../Models/Task";
import { TaskCategoryItem } from "../../Models/TaskCategoryItem";
import { SideBar } from "../SideBar/SideBar";
import { TaskList } from "../Tasks/TaskList";

const ToDoApp = () =>
{
    const tempCategoryList = [
        new TaskCategoryItem(
            "1",
            "Today", 
            "red", 
            [
                new Task("1", "Test task", status.new)
            ], 
            true, 
            "BookmarkBorderIcon"),
        new TaskCategoryItem("2",
        "Inbox",
        "red",
        [],
        false,
        "InboxIcon")
    ]
    const [taskCategories, setTaskCategories] =  useState(tempCategoryList) // this will be used to add a task category
    return(
        <>
            <SideBar taskCategories={taskCategories} setTaskCategories={setTaskCategories}/>
            <TaskList setTaskCategories={setTaskCategories} taskCategories={taskCategories} />   
        </>
    )
}

export default ToDoApp;
