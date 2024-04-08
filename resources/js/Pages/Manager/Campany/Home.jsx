import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { campanies } = props;
    
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
            
            
        </AuthenticatedLayout>
    );
}
