import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { campany } = props;
    
    const handleDeleteCampany = (id) => {
        router.delete(`/campany/delete/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Campany</h2>}
        >
            <Head title="Campany" />
                <div className="p-4">
                    <div className="p-3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="pt-6 text-gray-900 text-lg">{ campany.name }</div>
                            <div className="text-gray-900">電話番号：{ campany.telephone }</div>
                            <div className="pb-6 text-gray-900">メールアドレス：{ campany.email }</div>
                        </div>
                    </div>
                    
                    <div className="flex justify-start items-center gap-2">
                        <Link href={`/campany/edit/${campany.id}`}>編集</Link>
                        <button onClick={() => handleDeleteCampany(campany.id)}>削除</button>
                    </div>
                </div>
            
            
        </AuthenticatedLayout>
    );
}