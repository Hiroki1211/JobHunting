import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { meetings, campany } = props;
    
    console.log(meetings);
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Meeting</h2>}
        >
        
            <Head title="Meeting"/>
                <div className="grid grid-cols-2">
                    <div className="p-4">
                        <div className="p-2">
                            <Link href={`/meeting/create/${campany.id}`}>
                                <button>面接登録</button>
                            </Link>
                        </div>
                        { meetings.map((meeting) =>
                            <div key={meeting.id} className="p-3">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        <Link href={`/meeting/show/${meeting.id}`}>{ meeting.meeting_category.name }</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        task
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
