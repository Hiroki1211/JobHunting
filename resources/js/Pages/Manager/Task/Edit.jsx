import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";
import Select from "react-select";

export default function Dashboard(props) {
    
    const { campany, taskCategories, task } = props;
    
    const {data, setData, put} = useForm({
        userID : task.userID,
        resistrateUserID : task.registrateUserID,
        campanyID : campany.id,
        campanyName : campany.name,
        endDate : task.endDate,
        memo : task.memo,
        task_category_id : task.task_category_id
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/task/edit/${task.id}`);
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
                        {
                            taskCategories.map((taskCategory) => {
                                console.log(taskCategory.id == task.task_category_id);
                                if(taskCategory.id == task.task_category_id){
                                    return <option value={taskCategory.id} key={taskCategory.id} selected>{taskCategory.name}</option>
                                }else{
                                    return <option value={taskCategory.id} key={taskCategory.id}>{taskCategory.name}</option>
                                }
                            })
                        }
                    </select>
                </div>
                
                <div>
                    終了日時：
                    <input type="datetime-local" defaultValue={ task.endDate } onChange={(e) => setData("endDate", e.target.value)}></input>
                </div>
                
                <div>
                    メモ：
                    <textarea placeholder="メモを記述" defaultValue={ task.memo } onChange={(e) => setData("memo", e.target.value)}></textarea>
                </div>
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
