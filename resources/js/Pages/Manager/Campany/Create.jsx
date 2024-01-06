import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const {data, setData, post} = useForm({
        name : "",
        telephone : "",
        email : "",
        HP : "",
        workLocation : "",
        contents : "",
        workTime : "",
        flex : "",
        remoteWork : "",
        cloth : "",
        incomeYear : "",
        incomeMonth : "",
        incomeNatural : "",
        fixOverTime : "",
        fixOverTimeHour : "",
        fixOverTimePayment : ""
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/campany/create");
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CampanyRegister</h2>}
        >
            <Head title="CampanyRegister" />

            <form onSubmit={handleSendPosts}>
            
                <div className="grid grid-cols-5">
                    <div className="p-4 col-span-2">
                        <div class="relative overflow-x-auto pb-3">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-2">基本情報</th>
                                        <th scope="col" class="px-6 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            企業名
                                        </th>
                                        <td class="px-6 py-2 text-left"><input type="text" placeholder="株式会社〇〇" onChange={(e) => setData("name", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            電話番号
                                        </th>
                                        <td class="px-6 py-2 text-left"><input type="text" placeholder="000-0000-0000" onChange={(e) => setData("telephone", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            email
                                        </th>
                                        <td class="px-6 py-2 text-left"><input type="text" placeholder="xxxxx@email.com" onChange={(e) => setData("email", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            HP
                                        </th>
                                        <td class="px-6 py-2 text-left"><input type="text" placeholder="http://xxxxx.com" onChange={(e) => setData("HP", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            勤務地
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="東京" onChange={(e) => setData("workLocation", e.target.value)}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="p-4 col-span-3">
                        <div class="relative overflow-x-auto pb-3">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-2">事業内容</th>
                                        <th scope="col" class="px-6 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            事業内容
                                        </th>
                                        <td class="px-6 py-2"><textarea placeholder="事業内容を記述" onChange={(e) => setData("contents", e.target.value)}></textarea></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="relative overflow-x-auto pb-3">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-2">環境</th>
                                        <th scope="col" class="px-6 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            就業時間
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="10:00~18:00" onChange={(e) => setData("workTime", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            フレックス
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="有り" onChange={(e) => setData("flex", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            リモートワーク
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="有り" onChange={(e) => setData("remoteWork", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            服装
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="私服" onChange={(e) => setData("cloth", e.target.value)}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="relative overflow-x-auto pb-3">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-2">給与</th>
                                        <th scope="col" class="px-6 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            年収
                                        </th>
                                        <td class="px-6 py-2 text-left"><input type="text" placeholder="500万" onChange={(e) => setData("incomeYear", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            月収
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="40万" onChange={(e) => setData("incomeMonth", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            基本給
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="30万" onChange={(e) => setData("incomeNatural", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            固定残業
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="有り" onChange={(e) => setData("fixOverTime", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            固定残業時間
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="10時間" onChange={(e) => setData("fixOverTimeHour", e.target.value)}/></td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            支給金額
                                        </th>
                                        <td class="px-6 py-2"><input type="text" placeholder="10万" onChange={(e) => setData("fixOverTimePayment", e.target.value)}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
