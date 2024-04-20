import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { v4 as uuid } from "uuid";
import { React, useState } from "react";

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
        console.log(taskArrays);
        setTaskStates(taskArrays);
        console.log(taskStates);
        e.preventDefault();
        router.put('/task', taskStates);
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
                        <button type="submit">送信</button>
                        <div class="p-2">
                            <div>
                                今日
                            </div>
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
                                        { todayTaskStates.map((todayTaskState) =>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                                        { selectTaskState(todayTaskState, todayTaskStates, setTodayTaskStates) }
                                                    </td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ todayTaskState.task_category.name }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ todayTaskState.campanyName }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ todayTaskState.endDate }</td>
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div>
                                明日
                            </div>
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
                                        { tomorrowTaskStates.map((tomorrowTaskState) =>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                                        { selectTaskState(tomorrowTaskState, tomorrowTaskStates, setTomorrowTaskStates) }
                                                    </td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ tomorrowTaskState.task_category.name }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ tomorrowTaskState.campanyName }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ tomorrowTaskState.endDate }</td>
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div>
                                今週
                            </div>
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
                                        { weekTaskStates.map((weekTaskState) =>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                                        { selectTaskState(weekTaskState, weekTaskStates, setWeekTaskStates) }
                                                    </td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ weekTaskState.task_category.name }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ weekTaskState.campanyName }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ weekTaskState.endDate }</td>
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>                            
                            
                            <div>
                                今週以降
                            </div>
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
                                        { afterTaskStates.map((afterTaskState) =>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                                        { selectTaskState(afterTaskState, afterTaskStates, setAfterTaskStates) }
                                                    </td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ afterTaskState.task_category.name }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ afterTaskState.campanyName }</td>
                                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">{ afterTaskState.endDate }</td>
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            
        </AuthenticatedLayout>
    );
}
