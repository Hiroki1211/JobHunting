import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    const { company } = props;
    
    const handleDeleteCompany = (id) => {
        router.delete(`/company/delete/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    const colors = (props) => {
        switch(props.company_category.color){
            case 'red':
                return(
                    <span class = "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                        { props.company_category.name }
                    </span>
                ) 
            case 'orange':
                return(
                    <span class = "bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">
                        { props.company_category.name }
                    </span>
                )                 
            case 'yellow':
                 return(
                    <span class = "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
                        { props.company_category.name }
                    </span>
                )                
            case 'lightGreen':
                return(
                    <span class = "bg-lime-100 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-lime-400 border border-lime-400">
                        { props.company_category.name }
                    </span>
                )                 
            case 'green' :
                return(
                    <span class = "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        { props.company_category.name }
                    </span>
                )                
            case 'lightBlue' :
                return(
                    <span class = "bg-sky-100 text-sky-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-sky-400 border border-sky-400">
                        { props.company_category.name }
                    </span>
                )                 
            case 'blue' :
                return(
                    <span class = "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        { props.company_category.name }
                    </span>
                )                 
            case 'purple' :
                return(
                    <span class = "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                        { props.company_category.name }
                    </span>
                ) 
        }
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">company</h2>}
        >
            <Head title="company" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-5">
                        <div className="p-4 col-span-2">
                            <div className="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-2">基本情報</th>
                                                <th scope="col" class="px-6 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-900">
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    企業名
                                                </th>
                                                <td class="px-6 py-2 text-left">{ company.name }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    電話番号
                                                </th>
                                                <td class="px-6 py-2 text-left">{ company.telephone }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    email
                                                </th>
                                                <td class="px-6 py-2 text-left">{ company.email }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    HP
                                                </th>
                                                <td class="px-6 py-2 text-left">{ company.HP }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    勤務地
                                                </th>
                                                <td class="px-6 py-2">{ company.workLocation }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-2">職種</th>
                                                <th scope="col" class="px-6 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-900">
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    職種名
                                                </th>
                                                <td class="px-6 py-2 text-left">{ colors(company) }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="p-3">
                                <div className="flex justify-start items-center gap-2">
                                    <Link href={`/company/edit/${company.id}`}>
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                            <div className="p-3 text-gray-900 font-normal">    
                                                編集
                                            </div>
                                        </div>
                                    </Link>
                                    <button onClick={() => handleDeleteCompany(company.id)}>
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                            <div className="p-3 text-gray-900 font-normal">  
                                                削除
                                            </div>
                                        </div>
                                    </button>
    
                                    <Link href={`/meeting/${company.id}`}>
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                            <div className="p-3 text-gray-900 font-normal">  
                                                面接・タスク表示
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 col-span-3">
                            <div className="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-2">事業内容</th>
                                                <th scope="col" class="px-6 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-900">
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    事業内容
                                                </th>
                                                <td class="px-6 py-2 whitespace-pre-wrap">{ company.contents }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-2">環境</th>
                                                <th scope="col" class="px-6 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-900">
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    就業時間
                                                </th>
                                                <td class="px-6 py-2">{ company.workTime }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    フレックス
                                                </th>
                                                <td class="px-6 py-2">{ company.flex }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    リモートワーク
                                                </th>
                                                <td class="px-6 py-2">{ company.remoteWork }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    服装
                                                </th>
                                                <td class="px-6 py-2">{ company.cloth }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-2">給与</th>
                                                <th scope="col" class="px-6 py-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-900">
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    年収
                                                </th>
                                                <td class="px-6 py-2">{ company.incomeYear }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    月収
                                                </th>
                                                <td class="px-6 py-2">{ company.incomeMonth }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    基本給
                                                </th>
                                                <td class="px-6 py-2">{ company.incomeNatural }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    固定残業
                                                </th>
                                                <td class="px-6 py-2">{ company.fixOverTime }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    固定残業時間
                                                </th>
                                                <td class="px-6 py-2">{ company.fixOverTimeHour }</td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    支給金額
                                                </th>
                                                <td class="px-6 py-2">{ company.fixOverTimePayment }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </AuthenticatedLayout>
    );
}
