import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { campanies } = props;
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Campany</h2>}
        >
            <Head title="Campany" />
                <div className="p-4">
                    <div className="flex justify-end items-center gap-2">
                        <Link href="/campany/create">
                            <button>企業登録</button>
                        </Link>
                    </div>
                    { campanies.map((campany) =>
                        <div key={campany.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Link href={`/campany/${campany.id}`}>{ campany.name }</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            
            
        </AuthenticatedLayout>
    );
}
