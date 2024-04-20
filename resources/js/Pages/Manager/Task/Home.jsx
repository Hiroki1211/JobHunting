import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { v4 as uuid } from "uuid";
import { React, useState } from "react";
import Accordion from "@/Components/Accordion"

export default function Dashboard(props) {
    const { todayTasks, tomorrowTasks, weekTasks, afterTasks } = props;
    
    const mergeTasks = (todayTasks, tomorrowTasks, weekTasks, afterTasks) => {
        var array = [];
        array = todayTasks.concat(tomorrowTasks);
        array = array.concat(weekTasks);
        array = array.concat(afterTasks);
        return array;
    }
    
    const [ taskStates, setTaskStates ] = useState(mergeTasks(todayTasks, tomorrowTasks, weekTasks, afterTasks));

    const [ todayTaskStates, setTodayTaskStates ] = useState( todayTasks );
    const [ tomorrowTaskStates, setTomorrowTaskStates ] = useState( tomorrowTasks );
    const [ weekTaskStates, setWeekTaskStates ] = useState( weekTasks );
    const [ afterTaskStates, setAfterTaskStates ] = useState( afterTasks );
    
    const sqeezeTaskStates = (taskStates, targetValue) =>{
        var selectedTaskStates = taskStates;
        if(targetValue != "all"){
            selectedTaskStates = taskStates.filter( (taskState) => taskState.state == targetValue );
        }

        return selectedTaskStates;
    }
    
    const sqeezeMultTaskStates = (taskStates, targetValue1, targetValue2) => {
        const selectedTaskStates1 = taskStates.filter( (taskState) => (taskState.state == targetValue1) );
        const selectedTaskStates2 = taskStates.filter( (taskState) => (taskState.state == targetValue2) );
        const selectedTaskStates = selectedTaskStates1.concat(selectedTaskStates2);
        return selectedTaskStates;
    }
    
    const [ todayDisplayTaskStates, setTodayDisplayTaskStates ] = useState(sqeezeTaskStates(todayTaskStates, "unfinished"));
    const [ tomorrowDisplayTaskStates, setTomorrowDisplayTaskStates ] = useState(sqeezeTaskStates(tomorrowTaskStates, "unfinished"));
    const [ weekDisplayTaskStates, setWeekDisplayTaskStates ] = useState(sqeezeTaskStates(weekTaskStates, "unfinished"));
    const [ afterDisplayTaskStates, setAfterDisplayTaskStates ] = useState(sqeezeTaskStates(afterTaskStates, "unfinished"));
    
    const [ displayState, setDisplayState ] = useState("unfinished");
    
    const countTaskState = (taskStates, targetValue) => {
        var count = 0;
        taskStates.map((taskState) => {
            if(taskState.state == targetValue){
                count += 1;
            }
        });
        return count;
    }  
    
    const [ todayTaskCount, setTodayTaskCount ] = useState(countTaskState(todayTaskStates, "unfinished"));
    const [ tomorrowTaskCount, setTomorrowTaskCount ] = useState(countTaskState(tomorrowTaskStates, "unfinished"));
    const [ weekTaskCount, setWeekTaskCount ] = useState(countTaskState(weekTaskStates, "unfinished"));
    const [ afterTaskCount, setAfterTaskCount ] = useState(countTaskState(afterTaskStates, "unfinished"));
    
    const selectTaskState = (taskState, taskStates, setTaskStates) => {
        switch(taskState.state){
            case 'unfinished':
                return(
                    <select class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => changeTaskState(taskState, taskStates, setTaskStates)}>
                        <option selected>未完了</option>
                        <option>完了済</option>
                    </select>
                )
            case 'finish':
                return(
                    <select class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) =>changeTaskState(taskState, taskStates, setTaskStates)}>
                        <option>未完了</option>
                        <option selected>完了済</option>
                    </select>
                )
            case 'check':
                return(
                    <select class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) =>changeTaskState(taskState, taskStates, setTaskStates)}>
                        <option>未完了</option>
                        <option selected>完了済</option>
                    </select>
                )
        }
    }
    
    const changeTaskState = (taskState ,taskStates, setTaskStates) => {
        const newTasks = taskStates;
        const newTask = newTasks.find((newTask) => newTask.id === taskState.id)
        if(newTask.state == 'unfinished'){
            newTask.state = 'check';
        }else if(newTask.state == 'check' || newTask.state == 'finish'){
            newTask.state = 'unfinished';
        }
        setTaskStates(newTasks);
    }
    
    const checkFinishTaskState = (taskState, taskStates, setTaskStates) => {
        const newTasks = taskStates;
        const newTask = newTasks.find((newTask) => newTask.id === taskState.id);
        if(newTask.state == 'check'){
            newTask.state = 'finish';
        }
        setTaskStates(newTasks);
    }
    
    const handleSendTask = (e) => {
        const taskArrays = [];
        todayTaskStates.map((todayTaskState) => {
            checkFinishTaskState(todayTaskState, todayTaskStates, setTodayTaskStates)
            taskArrays.push(todayTaskState);
        });
        tomorrowTaskStates.map((tomorrowTaskState) => {
            checkFinishTaskState(tomorrowTaskState, tomorrowTaskStates, setTomorrowTaskStates)
            taskArrays.push(tomorrowTaskState);
        });  
        weekTaskStates.map((weekTaskState) => {
            checkFinishTaskState(weekTaskState, weekTaskStates, setWeekTaskStates)
            taskArrays.push(weekTaskState);
        }); 
        afterTaskStates.map((afterTaskState) => {
            checkFinishTaskState(afterTaskState, afterTaskStates, setAfterTaskStates)
            taskArrays.push(afterTaskState);
        });
        setTaskStates(taskArrays);
        
        setTodayTaskCount(countTaskState(todayTaskStates));
        setTomorrowTaskCount(countTaskState(tomorrowTaskStates));
        setWeekTaskCount(countTaskState(weekTaskStates));
        setAfterTaskCount(countTaskState(afterTaskStates));
        
        setTodayDisplayTaskStates(sqeezeTaskStates(todayTaskStates, displayState));
        setTomorrowDisplayTaskStates(sqeezeTaskStates(tomorrowTaskStates, displayState));
        setWeekDisplayTaskStates(sqeezeTaskStates(weekTaskStates, displayState));
        setAfterDisplayTaskStates(sqeezeTaskStates(afterTaskStates, displayState));
        
        e.preventDefault();
        router.put('/task', taskStates);
    }
    
    const displayTable = (taskStates, setTaskStates, taskCount, displayTaskStates) => {
        if(displayTaskStates.length > 0){
            return(
                <div class="relative overflow-x-auto border border-gray-400">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-2">状態</th>
                                <th scope="col" class="px-6 py-2">タスク名</th>
                                <th scope="col" class="px-6 py-2">企業名</th>
                                <th scope="col" class="px-6 py-2">締切</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-900">
                            { displayTaskStates.map((taskState) =>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                            { selectTaskState(taskState, taskStates, setTaskStates) }
                                        </td>
                                        <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ taskState.task_category.name }</td>
                                        <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ taskState.campanyName }</td>
                                        <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ taskState.endDate }</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return(
                <div></div>    
            )
        }
        
    }
    
    const taskTable = (title, taskStates, setTaskStates, check, taskCount, displayTaskStates) => {
        return (
            <div>
                <Accordion title={title} check={check}>
                    { displayTable(taskStates, setTaskStates, taskCount, displayTaskStates) }
                </Accordion>
            </div>
        )
    }
    
    const displayTitle = (title, countState) => {
        return(
            <div className="pt-2 pb-2 text-blue-700 font-normal text-sm">
                {title}({countState})
            </div>
        )
    }
    
    const selectState = (props) => {
        if(props == "all"){
            setTodayDisplayTaskStates(todayTaskStates);
            setTomorrowDisplayTaskStates(tomorrowTaskStates);
            setWeekDisplayTaskStates(weekTaskStates);
            setAfterDisplayTaskStates(afterTaskStates);
        }else if(props == "unfinished"){
            setTodayDisplayTaskStates(sqeezeTaskStates(todayTaskStates, "unfinished"));
            setTomorrowDisplayTaskStates(sqeezeTaskStates(tomorrowTaskStates, "unfinished"));
            setWeekDisplayTaskStates(sqeezeTaskStates(weekTaskStates, "unfinished"));
            setAfterDisplayTaskStates(sqeezeTaskStates(afterTaskStates, "unfinished"));
        }else if(props == "finish"){
            setTodayDisplayTaskStates(sqeezeMultTaskStates(todayTaskStates, "finish", "check"));
            setTomorrowDisplayTaskStates(sqeezeMultTaskStates(tomorrowTaskStates, "finish", "check"));
            setWeekDisplayTaskStates(sqeezeMultTaskStates(weekTaskStates, "finish", "check"));
            setAfterDisplayTaskStates(sqeezeMultTaskStates(afterTaskStates, "finish", "check"));  
        }
        setDisplayState(props);
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task</h2>}
        >
            <Head title="Task" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSendTask}>
                        <div class="flex justify-between p-3">
                            <div class="items-center flex">
                                <div class="font-bold">
                                    タスク一覧
                                </div>
                                <div class="pl-2">
                                    <select onChange={(e) => selectState(e.target.value)}>
                                        <option selected value="unfinished">未完了</option>
                                        <option value="finish">完了済</option>
                                        <option value="all">すべて</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                更新
                            </button>
                        </div>

                        
                        <div class="p-2">
                            { taskTable(displayTitle("今日", todayTaskCount), todayTaskStates, setTodayTaskStates, true, todayTaskCount, todayDisplayTaskStates) }
                            { taskTable(displayTitle("明日", tomorrowTaskCount), tomorrowTaskStates, setTomorrowTaskStates, false, tomorrowTaskCount, tomorrowDisplayTaskStates) }
                            { taskTable(displayTitle("今週", weekTaskCount), weekTaskStates, setWeekTaskStates, false, weekTaskCount, weekDisplayTaskStates) }
                            { taskTable(displayTitle("以降", afterTaskCount), afterTaskStates, setAfterTaskStates, false, afterTaskCount, afterDisplayTaskStates) }
                        </div>
                    </form>
                </div>
            
        </AuthenticatedLayout>
    );
}
