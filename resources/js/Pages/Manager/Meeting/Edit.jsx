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

            <form onSubmit={handleSendPosts}>

                <div>
                    面接の種類 ：
                    <select onChange={(e) => setData("meeting_category_id", e.target.value)}>
                        {
                            meetingCategories.map((meetingCategory) => {
                                console.log(meetingCategory.id == meeting.meeting_category_id);
                                if(meetingCategory.id == meeting.meeting_category_id){
                                    return <option value={meetingCategory.id} key={meetingCategory.id} selected>{meetingCategory.name}</option>
                                }else{
                                    return <option value={meetingCategory.id} key={meetingCategory.id}>{meetingCategory.name}</option>
                                }
                            })
                        }
                    </select>
                </div>
                
                <div>
                    開始日時：
                    <input type="datetime-local" defaultValue={ meeting.startDate } onChange={(e) => setData("startDate", e.target.value)}></input>
                </div>
                
                <div>
                    終了日時：
                    <input type="datetime-local" defaultValue={ meeting.endDate } onChange={(e) => setData("endDate", e.target.value)}></input>
                </div>
                
                <div>
                    面接場所：
                    <input type="text" placeholder="自宅"  defaultValue={ meeting.location } onChange={(e) => setData("location", e.target.value)}/>
                </div>
                
                <div>
                    服装：
                    <input type="text" placeholder="私服" defaultValue={ meeting.cloth } onChange={(e) => setData("cloth", e.target.value)}/>
                </div>
                
                <div>
                    メモ：
                    <textarea placeholder="メモを記述" defaultValue={ meeting.memo } onChange={(e) => setData("memo", e.target.value)}></textarea>
                </div>
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
