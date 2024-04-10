import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";
import Select from "react-select";

export default function Dashboard(props) {
    
    const { campany, taskCategories } = props;
    
    const {data, setData, post} = useForm({
        userID : "",
        registrateUserID : "",
        campanyID : campany.id,
        campanyName : campany.name,
        endDate : "",
        memo : "",
        state : "unfinished",
        task_category_id : ""
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/task/create");
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">TaskRegister</h2>}
        >
            <Head title="TaskRegister" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSendPosts}>
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
                                            <select onChange={(e) => setData("task_category_id", e.target.value)}>
                                                <option selected disable>種類を選択してください</option>
                                                {
                                                    taskCategories.map((taskCategory) => 
                                                        <option value={taskCategory.id} key={taskCategory.id}>{taskCategory.name}</option>
                                                    )
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            終了日時：
                                        </th>
                                        <td class="px-6 py-2 text-gray-900 dark:text-white">
                                            <input type="datetime-local" onChange={(e) => setData("endDate", e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            メモ：
                                        </th>
                                        <td class="px-6 py-2 text-gray-900 dark:text-white">
                                            <textarea placeholder="メモを記述" onChange={(e) => setData("memo", e.target.value)}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>    
                    
                    <button type="submit">作成</button>
                </form>
            </div>
            
        </AuthenticatedLayout>
    );
}
