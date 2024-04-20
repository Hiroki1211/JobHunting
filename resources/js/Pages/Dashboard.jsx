import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import Split from 'react-split';
import { v4 as uuid } from "uuid";
import { React, useState} from "react";
import Accordion from "@/Components/Accordion";


export default function Dashboard(props) {
    const { campanies, todayTasks, tomorrowTasks, weekTasks, todayMeetings, tomorrowMeetings, weekMeetings, campany_categories } = props;
    
    const [ todayTaskStates, setTodayTaskStates ] = useState(todayTasks);
    const [ tomorrowTaskStates, setTomorrowTaskStates ] = useState(tomorrowTasks);
    const [ weekTaskStates, setWeekTaskStates ] = useState(weekTasks);
    
    const mergeTasks = (todayTasks, tomorrowTasks, weekTasks) => {
        var array = [];
        array = todayTasks.concat(tomorrowTasks);
        array = array.concat(weekTasks);
        return array;
    }
    
    const [ tasks, setTasks ] = useState(mergeTasks(todayTasks, tomorrowTasks, weekTasks));
  
    const countTaskState = (taskStates) => {
        var count = 0;
        taskStates.map((taskState) => {
            if(taskState.state != 'finish'){
                count += 1;
            }
        });
        return count;
    }  
    
    const [ todayTaskCount, setTodayTaskCount ] = useState(countTaskState(todayTaskStates));
    const [ tomorrowTaskCount, setTomorrowTaskCount ] = useState(countTaskState(tomorrowTaskStates));
    const [ weekTaskCount, setWeekTaskCount ] = useState(countTaskState(weekTaskStates));
    
    const [ showCampanies, setShowCampanies ] = useState(campanies);
    
    // 企業のカテゴリ絞り込み
    const selectCampanyCategory = (props) => {
        if(props == "all"){
            setShowCampanies(campanies);
        }else{
            const selectedCampanies = campanies.filter( (campany) => campany.campany_category_id == props );
            setShowCampanies(selectedCampanies)
        }
    }
    
    const changeTaskState = (id, taskStates, setTaskStates) => {
        const newTasks = taskStates;
        const task = newTasks.find((task) => task.id === id )
        if(task.state == "unfinished"){
            task.state = "check";
        }else{
            task.state = "unfinished";
        }
        setTaskStates(newTasks);
    }    
    
    const displayTitle = (title, countState) => {
        return(
            <div className="pt-2 pb-2 text-blue-700 font-normal text-sm">
                {title}({countState})
            </div>
        )
    }
    
    const displayTask = (taskState, taskStates, setTaskStates) => {
        if(taskState.state != 'finish'){
            return(
                <div className="pl-2 pb-2 items-center flex">
                    <input 
                        type="checkbox"
                        onChange={(e) => changeTaskState(taskState.id, taskStates, setTaskStates)}
                    ></input>
                    <div class="pl-2">
                        <Link href={`/task/show/${taskState.id}`}>
                            { taskState.task_category.name }( {taskState.campanyName} )
                        </Link>
                    </div>
                </div>
            );
        }        
    }
    
    const displayTasks = (taskStates, setTaskStates) => {
        return(
            <div>
                <div>
                    {taskStates.map((taskState) => (
                        <div key = {taskState.id}>
                            { displayTask(taskState, taskStates, setTaskStates) }
                        </div>
                    ))}
                </div>
            </div>
         )
    }
    
    const checkFinishTaskState = (id, taskStates, setTaskStates) => {
        const newTasks = taskStates;
        const task = newTasks.find((task) => task.id === id )
        if(task.state == "check"){
            task.state = "finish";
        }
        setTaskStates(newTasks);
    }    
    
    const handleSendTask = (e) => {
        const taskArrays = [];
        todayTaskStates.map((todayTaskState) => {
            taskArrays.push(todayTaskState);
            checkFinishTaskState(todayTaskState.id, todayTaskStates, setTodayTaskStates);
        });
        tomorrowTaskStates.map((tomorrowTaskState) => {
            taskArrays.push(tomorrowTaskState);
            checkFinishTaskState(tomorrowTaskState.id, tomorrowTaskStates, setTomorrowTaskStates);
        });        
        weekTaskStates.map((weekTaskState) => {
            taskArrays.push(weekTaskState);
            checkFinishTaskState(weekTaskState.id, weekTaskStates, setWeekTaskStates);
        });
        
        setTasks(taskArrays);
        setTodayTaskCount(countTaskState(todayTaskStates));
        setTomorrowTaskCount(countTaskState(tomorrowTaskStates));
        setWeekTaskCount(countTaskState(weekTaskStates));
        
        e.preventDefault();
        router.put('/task/state', tasks);
    }

    // 企業のカテゴリの色
    const colors = (props) => {
        switch(props.campany_category.color){
            case 'red':
                return(
                    <span class = "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                        { props.campany_category.name }
                    </span>
                ) 
            case 'orange':
                return(
                    <span class = "bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">
                        { props.campany_category.name }
                    </span>
                )                 
            case 'yellow':
                 return(
                    <span class = "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
                        { props.campany_category.name }
                    </span>
                )                
            case 'lightGreen':
                return(
                    <span class = "bg-lime-100 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-lime-400 border border-lime-400">
                        { props.campany_category.name }
                    </span>
                )                 
            case 'green' :
                return(
                    <span class = "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        { props.campany_category.name }
                    </span>
                )                
            case 'lightBlue' :
                return(
                    <span class = "bg-sky-100 text-sky-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-sky-400 border border-sky-400">
                        { props.campany_category.name }
                    </span>
                )                 
            case 'blue' :
                return(
                    <span class = "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        { props.campany_category.name }
                    </span>
                )                 
            case 'purple' :
                return(
                    <span class = "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                        { props.campany_category.name }
                    </span>
                ) 
        }
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-5">
                    <div className="col-span-3">
                        <div className="p-3 font-bold flex items-center">
                            <div>    
                                企業一覧
                            </div>
                            <div class="pl-2">
                                <select onChange={ (e) => selectCampanyCategory(e.target.value) }>
                                    <option value="all">All</option>
                                    { campany_categories.map((campany_category) =>
                                        <option value = { campany_category.id } key = {campany_category.id}>{ campany_category.name }</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        
                        { showCampanies.map((campany) =>
                            <div key = {campany.id} className="p-2">
                                <Link href={`/campany/${campany.id}`}>
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                        <div className="p-6 text-gray-900 font-normal">
                                            <div>
                                                { campany.name }
                                            </div>
                                            <div>
                                                { colors(campany) }
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    
                    <div className='p-2 col-span-2'>
                        <form onSubmit={handleSendTask}>
                            <div className="max-w-7xl mx-auto pb-3">
                                <div className="bg-white overflow-hidden shadow-sm border border-gray-400">
                                    <div className="text-gray-900 bg-gray-200 border-b border-gray-400 font-bold flex justify-between items-center p-2">
                                        <div>    
                                            タスク
                                        </div>
                                        <div>
                                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                更新
                                            </button>
                                        </div>
                                    </div>
                                    <Accordion 
                                        check={true}
                                        title={displayTitle("今日", todayTaskCount)}
                                    >
                                        {displayTasks(todayTaskStates, setTodayTaskStates)}
                                    </Accordion>
                                    <Accordion 
                                        check={false}
                                        title={displayTitle("明日", tomorrowTaskCount)}
                                    >
                                        {displayTasks(tomorrowTaskStates, setTomorrowTaskStates)}
                                    </Accordion>
                                    <Accordion 
                                        check={false}
                                        title={displayTitle("今週", weekTaskCount)}
                                    >
                                        {displayTasks(weekTaskStates, setWeekTaskStates)}
                                    </Accordion>
                                </div>
                            </div>
                        </form>
                        
                        <div className="max-w-7xl mx-auto ">
                            <div className="bg-white overflow-hidden shadow-sm border border-gray-400">
                                <div className="p-2 text-gray-900 bg-gray-200 border-b border-gray-400 font-bold">面接・面談</div>
                                <div className="pt-2 pl-2 pb-2 text-blue-700 font-normal text-sm">今日</div>
                                    { todayMeetings.map((todayMeeting) =>
                                        <div key = {todayMeeting.id} className="pl-2 pb-2">
                                            <Link href={`/meeting/show/${todayMeeting.id}`}>{ todayMeeting.meeting_category.name }( {todayMeeting.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="pl-2 pb-2 text-blue-700 font-normal text-sm">明日</div>
                                    { tomorrowMeetings.map((tomorrowMeeting) =>
                                        <div key = {tomorrowMeeting.id} className="pl-2 pb-2">
                                            <Link href={`/meeting/show/${tomorrowMeeting.id}`}>{ tomorrowMeeting.meeting_category.name }( {tomorrowMeeting.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="pl-2 pb-2 text-blue-700 font-normal text-sm">今週</div>
                                    { weekMeetings.map((weekMeeting) =>
                                        <div key = {weekMeeting.id} className="pl-2 pb-2">
                                            <Link href={`/meeting/show/${weekMeeting.id}`}>{ weekMeeting.meeting_category.name }( {weekMeeting.campanyName} )</Link>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
