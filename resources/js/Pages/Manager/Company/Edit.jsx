import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const { company, categories } = props;
    
    const {data, setData, put} = useForm({
        name : company.name,
        telephone : company.telephone,
        email : company.email,
        HP : company.HP,
        workLocation : company.workLocation,
        contents : company.contents,
        workTime : company.workTime,
        flex : company.flex,
        remoteWork : company.remoteWork,
        cloth : company.cloth,
        incomeYear : company.incomeYear,
        incomeMonth : company.incomeMonth,
        incomeNatural : company.incomeNatural,
        fixOverTime : company.fixOverTime,
        fixOverTimeHour : company.fixOverTimeHour,
        fixOverTimePayment : company.fixOverTimePayment,
        company_category_id : company.company_category.id
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/company/edit/${company.id}`);
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CompanyRegister</h2>}
        >
            <Head title="CompanyRegister" />

            <form onSubmit={handleSendPosts}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-5">
                        <div className="p-4 col-span-2">
                            <div class="p-2">
                                <div class="relative overflow-x-auto border border-gray-400">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-400">
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
                                                <td class="px-6 py-2 text-left text-gray-900 dark:text-white"><input type="text" placeholder="株式会社〇〇" defaultValue={ company.name } onChange={(e) => setData("name", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    電話番号
                                                </th>
                                                <td class="px-6 py-2 text-left text-gray-900 dark:text-white"><input type="text" placeholder="000-0000-0000" defaultValue={ company.telephone } onChange={(e) => setData("telephone", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    email
                                                </th>
                                                <td class="px-6 py-2 text-left text-gray-900 dark:text-white"><input type="text" placeholder="xxxxx@email.com" defaultValue={ company.email } onChange={(e) => setData("email", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    HP
                                                </th>
                                                <td class="px-6 py-2 text-left text-gray-900 dark:text-white"><input type="text" placeholder="http://xxxxx.com" defaultValue={ company.HP } onChange={(e) => setData("HP", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    勤務地
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="東京" defaultValue={ company.workLocation } onChange={(e) => setData("workLocation", e.target.value)}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
    
                            <div class = "p-2">
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
                                            <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                                <div>
                                                    <select onChange={(e) => setData("company_category_id", e.target.value)}>
                                                        { categories.map((category) => {
                                                            if(company.company_category_id == category.id){
                                                                return <option selected value = { category.id } key = {category.id}>{ category.name }</option>
                                                            }else{
                                                                return <option value = { category.id } key = {category.id}>{ category.name }</option>
                                                            }
                                                        }    
                                                        )}
                                                     </select>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <button type="submit">
                                <div className="p-2">
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-400">
                                        <div className="p-3 text-gray-900 font-normal">  
                                            編集
                                        </div>
                                    </div>
                                </div>
                            </button>
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
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    事業内容
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><textarea placeholder="事業内容を記述" defaultValue={ company.contents } onChange={(e) => setData("contents", e.target.value)}></textarea></td>
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
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    就業時間
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="10:00~18:00" defaultValue={ company.workTime } onChange={(e) => setData("workTime", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    フレックス
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="有り" defalutValue={ company.flex } onChange={(e) => setData("flex", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    リモートワーク
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="有り" defaultValue={ company.remoteWork } onChange={(e) => setData("remoteWork", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    服装
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="私服" defaultValue={ company.cloth } onChange={(e) => setData("cloth", e.target.value)}/></td>
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
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    年収
                                                </th>
                                                <td class="px-6 py-2 text-left text-gray-900 dark:text-white"><input type="text" placeholder="500万" defaultValue={ company.incomeYear } onChange={(e) => setData("incomeYear", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    月収
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="40万" defaultValue={ company.incomeMonth } onChange={(e) => setData("incomeMonth", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    基本給
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="30万" defaultValue={ company.incomeNatural } onChange={(e) => setData("incomeNatural", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    固定残業
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="有り" defaultValue={ company.fixOverTime } onChange={(e) => setData("fixOverTime", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    固定残業時間
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="10時間" defaultValue={ company.fixOverTimeHour } onChange={(e) => setData("fixOverTimeHour", e.target.value)}/></td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    支給金額
                                                </th>
                                                <td class="px-6 py-2 text-gray-900 dark:text-white"><input type="text" placeholder="10万" defalutValue={ company.fixOverTimePayment } onChange={(e) => setData("fixOverTimePayment", e.target.value)}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </form>
            
        </AuthenticatedLayout>
    );
}
