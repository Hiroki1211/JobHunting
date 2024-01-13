import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Split from 'react-split';
import React from "react";

export default function Dashboard(props) {
    const { campanies } = props;
    
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
                            <div className="p-3 text-gray-900">明日</div>
                            <div className="p-3 text-gray-900">今週</div>
                        </div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto ">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-3 text-gray-900">面接・面談</div>
                            <div className="p-3 text-gray-900">今日</div>
                            <div className="p-3 text-gray-900">明日</div>
                            <div className="p-3 text-gray-900">今週</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </AuthenticatedLayout>
    );
}
