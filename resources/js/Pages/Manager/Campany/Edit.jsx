import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm } from '@inertiajs/react';
import React from "react";

export default function Dashboard(props) {
    
    const { campany } = props;
    
    const {data, setData, put} = useForm({
        name : campany.name,
        telephone : campany.telephone,
        email : campany.email
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/campany/edit/${campany.id}`);
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CampanyRegister</h2>}
        >
            <Head title="CampanyEdit" />

            <form onSubmit={handleSendPosts}>
                <div>
                    <h2>企業名</h2>
                    <input type="text" placeholder="株式会社〇〇" defaultValue={campany.name} onChange={(e) => setData("name", e.target.value)}/>
                </div>
                
                 <div>
                    <h2>telephone</h2>
                    <input type="text" placeholder="000-0000-0000" defaultValue={campany.telephone} onChange={(e) => setData("telephone", e.target.value)}/>
                </div>
                
                <div>
                    <h2>email</h2>
                    <input type="text" placeholder="xxxxx@email.com" defaultValue={campany.email} onChange={(e) => setData("email", e.target.value)}/>
                </div>
                
                <button type="submit">作成</button>
            </form>
            
        </AuthenticatedLayout>
    );
}
