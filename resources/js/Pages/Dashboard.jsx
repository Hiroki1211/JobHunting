import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Split from 'react-split';
import React from "react";

export default function Dashboard(props) {
    const { campanies, todayTasks, tomorrowTasks, weekTasks, todayMeetings, tomorrowMeetings, weekMeetings } = props;
    
    console.log(todayTasks);
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />
            
            <div className="grid grid-cols-5">
                <div className="p-4 col-span-3">
                    <div className="p-3">企業一覧</div>
                    { campanies.map((campany) =>
                        <div key = {campany.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Link href={`/campany/${campany.id}`}>{ campany.name }</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                
                <div className='p-4 col-span-2'>
                    <div className="max-w-7xl mx-auto pb-3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-3 text-gray-900">タスク</div>
                            <div className="p-3 text-gray-900">今日</div>
                                { todayTasks.map((todayTask) =>
                                    <div key = {todayTask.id} className="p-3">
                                        { todayTask.task_category.name }( {todayTask.campanyName} )
                                    </div>
                                )}
                            <div className="p-3 text-gray-900">明日</div>
                                { tomorrowTasks.map((tomorrowTask) =>
                                    <div key = {tomorrowTask.id} className="p-3">
                                        { tomorrowTask.task_category.name }( {tomorrowTask.campanyName} )
                                    </div>
                                )}
                            <div className="p-3 text-gray-900">今週</div>
                                { weekTasks.map((weekTask) =>
                                    <div key = {weekTask.id} className="p-3">
                                        { weekTask.task_category.name }( {weekTask.campanyName} )
                                    </div>
                                )}
                        </div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto ">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-3 text-gray-900">面接・面談</div>
                            <div className="p-3 text-gray-900">今日</div>
                                { todayMeetings.map((todayMeeting) =>
                                    <div key = {todayMeeting.id} className="p-3">
                                        { todayMeeting.meeting_category.name }( {todayMeeting.campanyName} )
                                    </div>
                                )}
                            <div className="p-3 text-gray-900">明日</div>
                                { tomorrowMeetings.map((tomorrowMeeting) =>
                                    <div key = {tomorrowMeeting.id} className="p-3">
                                        { tomorrowMeeting.meeting_category.name }( {tomorrowMeeting.campanyName} )
                                    </div>
                                )}
                            <div className="p-3 text-gray-900">今週</div>
                                { weekMeetings.map((weekMeeting) =>
                                    <div key = {weekMeeting.id} className="p-3">
                                        { weekMeeting.meeting_category.name }( {weekMeeting.campanyName} )
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            
            
        </AuthenticatedLayout>
    );
}
