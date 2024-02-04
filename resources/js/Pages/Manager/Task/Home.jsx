import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { todayTasks, tomorrowTasks, weekTasks, afterTasks } = props;
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task</h2>}
        >
            <Head title="Task" />
                <div className="p-4">
                    今日
                    { todayTasks.map((todayTask) =>
                        <div key={todayTask.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    { todayTask.task_category.name }( { todayTask.campanyName } )
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    明日
                    { tomorrowTasks.map((tomorrowTask) =>
                        <div key={tomorrowTask.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    { tomorrowTask.task_category.name }( { tomorrowTask.campanyName } )
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    今週
                    { weekTasks.map((weekTask) =>
                        <div key={weekTask.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    { weekTask.task_category.name }( { weekTask.campanyName } )
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    今後
                    { afterTasks.map((afterTask) =>
                        <div key={afterTask.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    { afterTask.task_category.name }( { afterTask.campanyName } )
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            
        </AuthenticatedLayout>
    );
}
