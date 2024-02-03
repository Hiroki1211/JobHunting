import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, router } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const { task } = props;
    
    const handleDeleteCampany = (id) => {
        router.delete(`/task/delete/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MeetingRegister</h2>}
        >
            <Head title="TaskShow" />

            <div>
                {task.task_category.name}
            </div>
            
            <div>
                {task.endDate}
            </div>
            
            <div>
                {task.memo}
            </div>
            
            <div className="p-3">
                <div className="flex justify-start items-center gap-2">
                    <Link href={`/task/edit/${task.id}`}>編集</Link>
                    <button onClick={() => handleDeleteCampany(task.id)}>削除</button>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
