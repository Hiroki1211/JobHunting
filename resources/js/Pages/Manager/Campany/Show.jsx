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
                                        <td class="px-6 py-2 text-left">{ campany.name }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            電話番号
                                        </th>
                                        <td class="px-6 py-2 text-left">{ campany.telephone }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            email
                                        </th>
                                        <td class="px-6 py-2 text-left">{ campany.email }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            HP
                                        </th>
                                        <td class="px-6 py-2 text-left">{ campany.HP }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            勤務地
                                        </th>
                                        <td class="px-6 py-2">{ campany.workLocation }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="p-3">
                            <div className="flex justify-start items-center gap-2">
                                <Link href={`/campany/edit/${campany.id}`}>編集</Link>
                                <button onClick={() => handleDeleteCampany(campany.id)}>削除</button>
                            </div>
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
                                        <td class="px-6 py-2">{ campany.contents }</td>
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
                                        <td class="px-6 py-2">{ campany.workTime }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            フレックス
                                        </th>
                                        <td class="px-6 py-2">{ campany.flex }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            リモートワーク
                                        </th>
                                        <td class="px-6 py-2">{ campany.remoteWork }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            服装
                                        </th>
                                        <td class="px-6 py-2">{ campany.cloth }</td>
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
                                        <td class="px-6 py-2 text-left">{ campany.incomeYear }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            月収
                                        </th>
                                        <td class="px-6 py-2">{ campany.incomeMonth }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            基本給
                                        </th>
                                        <td class="px-6 py-2">{ campany.incomeNatural }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            固定残業
                                        </th>
                                        <td class="px-6 py-2">{ campany.fixOverTime }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            固定残業時間
                                        </th>
                                        <td class="px-6 py-2">{ campany.fixOverTimeHour }</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            支給金額
                                        </th>
                                        <td class="px-6 py-2">{ campany.fixOverTimePayment }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                
            
        </AuthenticatedLayout>
    );
}
