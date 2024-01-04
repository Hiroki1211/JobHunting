import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const {data, setData, post} = useForm({
        name : "",
        telephone : "",
        email : ""
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
                <div>
                    <h2>企業名</h2>
                    <input type="text" placeholder="株式会社〇〇" onChange={(e) => setData("name", e.target.value)}/>
                </div>
                
                 <div>
                    <h2>telephone</h2>
                    <input type="text" placeholder="000-0000-0000" onChange={(e) => setData("telephone", e.target.value)}/>
                </div>
                
                <div>
                    <h2>email</h2>
                    <input type="text" placeholder="xxxxx@email.com" onChange={(e) => setData("email", e.target.value)}/>
                </div>
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
