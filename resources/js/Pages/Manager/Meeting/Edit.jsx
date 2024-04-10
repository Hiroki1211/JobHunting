import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";
import Select from "react-select";

export default function Dashboard(props) {
    
    const { campany, meetingCategories, meeting } = props;
    
    const {data, setData, put} = useForm({
        userID : meeting.userID,
        resistrateUserID : meeting.registrateUserID,
        campanyID : campany.id,
        campanyName : campany.name,
        startDate : meeting.startDate,
        endDate : meeting.endDate,
        memo : meeting.memo,
        location : meeting.location,
        cloth : meeting.cloth,
        meeting_category_id : meeting.meeting_category_id
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/meeting/edit/${meeting.id}`);
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MeetingRegister</h2>}
        >
            <Head title="MeetingRegister" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSendPosts}>
                    <div class = "p-2">
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
                                        面接の種類：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <select onChange={(e) => setData("meeting_category_id", e.target.value)}>
                                            {
                                                meetingCategories.map((meetingCategory) => {
                                                    if(meetingCategory.id == meeting.meeting_category_id){
                                                        return <option value={meetingCategory.id} key={meetingCategory.id} selected>{meetingCategory.name}</option>
                                                    }else{
                                                        return <option value={meetingCategory.id} key={meetingCategory.id}>{meetingCategory.name}</option>
                                                    }
                                                })
                                            }
                                        </select>
                                    </td>
                                </tr>
                                
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        開始日時：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <input type="datetime-local" defaultValue={ meeting.startDate } onChange={(e) => setData("startDate", e.target.value)}></input>
                                    </td>
                                </tr>                            
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        終了日時：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <input type="datetime-local" defaultValue={ meeting.endDate } onChange={(e) => setData("endDate", e.target.value)}></input>
                                    </td>
                                </tr>                               
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        面接場所：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <input type="text" placeholder="自宅"  defaultValue={ meeting.location } onChange={(e) => setData("location", e.target.value)}/>
                                    </td>
                                </tr>  
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        服装：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <input type="text" placeholder="私服" defaultValue={ meeting.cloth } onChange={(e) => setData("cloth", e.target.value)}/>
                                    </td>
                                </tr>  
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        メモ：
                                    </th>
                                    <td class="px-6 py-2 text-left text-gray-900 dark:text-white">
                                        <textarea placeholder="メモを記述" defaultValue={ meeting.memo } onChange={(e) => setData("memo", e.target.value)}></textarea>
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
