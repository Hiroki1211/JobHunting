import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Split from 'react-split';

export default function Dashboard(props) {
    const { campanies } = props;
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />
            
            <Split 
                className="flex" 
                sizes={[66, 34]} 
                minSize={[window.innerWidth * 0.5, window.innerWidth * 0.3]}
                gutter={() => {
                    const gutterElement = document.createElement("div");
                    gutterElement.className = `w-[2px] bg-gray-400 hover:cursor-col-resize hover:w-[3px] hover:bg-gray-600 transition-all delay-300 duration-300 ease-in-out`;
                    return gutterElement;
                }}
                // デフォルトのガター幅を無効にするために指定
                gutterStyle={() => ({})}
            >
                <div className="p-4">
                    <div className="p-3">企業一覧</div>
                    { campanies.map((campany) =>
                        <div key = {campany.id} className="p-3">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">{ campany.name }</div>
                            </div>
                        </div>
                    )}
                </div>
                
                
                <div className='p-4'>
                    <div className="max-w-7xl mx-auto ">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">タスク一覧</div>
                        </div>
                    </div>
                </div>
            </Split>
            
            
        </AuthenticatedLayout>
    );
}
