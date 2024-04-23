import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, router } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const { task } = props;
    
    const handleDeletecompany = (id) => {
        router.delete(`/task/delete/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">TaskShow</h2>}
        >
            <Head title="TaskShow" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-2">
                    <div class="relative overflow-x-auto border border-gray-400">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-2">基本事項</th>
                                    <th scope="col" class="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        タスクの種類：
                                    </th>
                                    <td class="px-6 py-2 text-gray-900 dark:text-white">
                                        {task.task_category.name}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        終了日時：
                                    </th>
                                    <td class="px-6 py-2 text-gray-900 dark:text-white">
                                        {task.endDate}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        メモ：
                                    </th>
                                    <td class="px-6 py-2 text-gray-900 dark:text-white">
                                        {task.memo}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="p-3">
                    <div className="flex justify-start items-center gap-2">
                        <Link href={`/task/edit/${task.id}`}>編集</Link>
                        <button onClick={() => handleDeletecompany(task.id)}>削除</button>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
