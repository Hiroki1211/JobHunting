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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MeetingRegister</h2>}
        >
            <Head title="TaskRegister" />

            <form onSubmit={handleSendPosts}>

                <div>
                    タスクの種類 ：
                    <select onChange={(e) => setData("task_category_id", e.target.value)}>
                        <option selected disable>種類を選択してください</option>
                        {
                            taskCategories.map((taskCategory) => 
                                <option value={taskCategory.id} key={taskCategory.id}>{taskCategory.name}</option>
                            )
                        }
                    </select>
                </div>
                
                <div>
                    終了日時：
                    <input type="datetime-local" onChange={(e) => setData("endDate", e.target.value)}></input>
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
