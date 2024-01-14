import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, router } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const { meeting } = props;
    
    const handleDeleteCampany = (id) => {
        router.delete(`/meeting/delete/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MeetingRegister</h2>}
        >
            <Head title="MeetingRegister" />

            <div>
                {meeting.meeting_category.name}
            </div>
            
            <div>
                {meeting.startDate}
            </div>
            
            <div>
                {meeting.endDate}
            </div>
            
            <div>
                {meeting.location}
            </div>
            
            <div>
                {meeting.cloth}
            </div>
            
            <div>
                {meeting.memo}
            </div>
            
            <div className="p-3">
                <div className="flex justify-start items-center gap-2">
                    <Link href={`/meeting/edit/${meeting.id}`}>編集</Link>
                    <button onClick={() => handleDeleteCampany(meeting.id)}>削除</button>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
