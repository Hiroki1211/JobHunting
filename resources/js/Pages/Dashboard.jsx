import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Split from 'react-split';
import React from "react";

export default function Dashboard(props) {
    const { campanies, todayTasks, tomorrowTasks, weekTasks, todayMeetings, tomorrowMeetings, weekMeetings } = props;
    
    const colors = (props) => {
        console.log(props);
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
                        <div className="p-3 font-bold">企業一覧</div>
                        { campanies.map((campany) =>
                            <div key = {campany.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                    <div className="p-6 text-gray-900 font-normal">
                                        <div>
                                            <Link href={`/campany/${campany.id}`}>{ campany.name }</Link>
                                        </div>
                                        <div>
                                            { colors(campany) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    
                    <div className='p-2 col-span-2'>
                        <div className="max-w-7xl mx-auto pb-3">
                            <div className="bg-white overflow-hidden shadow-sm border border-gray-400">
                                <div className="p-3 text-gray-900 bg-gray-200 border-b border-gray-400 font-bold">タスク</div>
                                <div className="p-2 text-blue-700 font-normal">今日</div>
                                    { todayTasks.map((todayTask) =>
                                        <div key = {todayTask.id} className="p-2">
                                            <Link href={`/task/show/${todayTask.id}`}>{ todayTask.task_category.name }( {todayTask.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="p-2 text-blue-700 font-normal">明日</div>
                                    { tomorrowTasks.map((tomorrowTask) =>
                                        <div key = {tomorrowTask.id} className="p-2">
                                            <Link href={`/task/show/${tomorrowTask.id}`}>{ tomorrowTask.task_category.name }( {tomorrowTask.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="p-2 text-blue-700 font-normal">今週</div>
                                    { weekTasks.map((weekTask) =>
                                        <div key = {weekTask.id} className="p-2">
                                            <Link href={`/task/show/${weekTask.id}`}>{ weekTask.task_category.name }( {weekTask.campanyName} )</Link>
                                        </div>
                                    )}
                            </div>
                        </div>
                        
                        <div className="max-w-7xl mx-auto ">
                            <div className="bg-white overflow-hidden shadow-sm border border-gray-400">
                                <div className="p-3 text-gray-900 bg-gray-200 border-b border-gray-400 font-bold">面接・面談</div>
                                <div className="p-2 text-blue-700 font-normal">今日</div>
                                    { todayMeetings.map((todayMeeting) =>
                                        <div key = {todayMeeting.id} className="p-2">
                                            <Link href={`/meeting/show/${todayMeeting.id}`}>{ todayMeeting.meeting_category.name }( {todayMeeting.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="p-2 text-blue-700 font-normal">明日</div>
                                    { tomorrowMeetings.map((tomorrowMeeting) =>
                                        <div key = {tomorrowMeeting.id} className="p-2">
                                            <Link href={`/meeting/show/${tomorrowMeeting.id}`}>{ tomorrowMeeting.meeting_category.name }( {tomorrowMeeting.campanyName} )</Link>
                                        </div>
                                    )}
                                <div className="p-2 text-blue-700 font-normal">今週</div>
                                    { weekMeetings.map((weekMeeting) =>
                                        <div key = {weekMeeting.id} className="p-2">
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
