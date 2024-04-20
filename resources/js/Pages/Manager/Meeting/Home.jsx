import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { todayMeetings, tomorrowMeetings, weekMeetings, afterMeetings } = props;
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Meeting</h2>}
        >
            <Head title="Meeting" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-4">
                        今日
                        { todayMeetings.map((todayMeeting) =>
                            <div key={todayMeeting.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        { todayMeeting.meeting_category.name }( { todayMeeting.campanyName } )
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        明日
                        { tomorrowMeetings.map((tomorrowMeeting) =>
                            <div key={tomorrowMeeting.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        { tomorrowMeeting.meeting_category.name }( { tomorrowMeeting.campanyName } )
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        今週
                        { weekMeetings.map((weekMeeting) =>
                            <div key={weekMeeting.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        { weekMeeting.meeting_category.name }( { weekMeeting.campanyName } )
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        今後
                        { afterMeetings.map((afterMeeting) =>
                            <div key={afterMeeting.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        { afterMeeting.meeting_category.name }( { afterMeeting.campanyName } )
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            
        </AuthenticatedLayout>
    );
}
