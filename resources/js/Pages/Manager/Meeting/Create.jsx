import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";
import Select from "react-select";

export default function Dashboard(props) {
    
    const { campany, meetingCategories } = props;
    
    const {data, setData, post} = useForm({
        userID : "",
        resistrateUserID : "",
        campanyID : campany.id,
        campanyName : campany.name,
        startDate : "",
        endDate : "",
        memo : "",
        location : "",
        cloth : "",
        meetingCategoryID : ""
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/meeting/create");
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MeetingRegister</h2>}
        >
            <Head title="MeetingRegister" />

            <form onSubmit={handleSendPosts}>

                <div>
                    面接の種類 ：
                    <select onChange={(e) => setData("meetingCategoryID", e.target.value)}>
                        <option selected disable>種類を選択してください</option>
                        {
                            meetingCategories.map((meetingCategory) => 
                                <option value={meetingCategory.id} key={meetingCategory.id}>{meetingCategory.name}</option>
                            )
                        }
                    </select>
                </div>
                
                <div>
                    開始日時：
                    <input type="datetime-local" onChange={(e) => setData("startDate", e.target.value)}></input>
                </div>
                
                <div>
                    終了日時：
                    <input type="datetime-local" onChange={(e) => setData("endDate", e.target.value)}></input>
                </div>
                
                <div>
                    面接場所：
                    <input type="text" placeholder="自宅" onChange={(e) => setData("location", e.target.value)}/>
                </div>
                
                <div>
                    服装：
                    <input type="text" placeholder="私服" onChange={(e) => setData("cloth", e.target.value)}/>
                </div>
                
                <div>
                    メモ：
                    <textarea placeholder="メモを記述" onChange={(e) => setData("memo", e.target.value)}></textarea>
                </div>
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
