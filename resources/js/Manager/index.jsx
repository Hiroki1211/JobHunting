import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>Blog Name</h1>
                <div>
                    <div>
                        <h2>Title</h2>
                        <p>This is a simple body.</p>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Index;