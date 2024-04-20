import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja'; // 追加
import { Head, Link } from '@inertiajs/react';
import React from "react";

function App(props) {
    
    const { events } = props;
    
    const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    console.log(events);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Calendar</h2>}
        >
        
            <Head title="Calendar" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="p-2">
                        <div class="bg-white shadow-sm sm:rounded-lg">
                            <div class="p-2 text-sm">
                                <FullCalendar 
                                    plugins = {[dayGridPlugin]}
                                    initialView = "dayGridMonth"
                                    locales = {[jaLocale]}
                                    locale = 'ja'
                                    events = {events}
                                    weekends={true} // 週末を強調表示する。
                                    height = 'auto'
                                    dayCellContent = {function(e) {
                                        e.dayNumberText = e.dayNumberText.replace('日', '');
                                        return e.dayNumberText;
                                    }}
                                    dayHeaderContent = {function(arg) {
                                        return DAY_NAMES[arg.date.getDay()]
                                    }}
                                    showNonCurrentDates = {false} // 月表示で先月や来月の日にちが表示されなくな
                                    headerToolbar={{ // カレンダーのヘッダー設定。(詳細は後述。※2)
                                      start: 'today',
                                      center: 'title',
                                      end: 'prev,next'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            
        </AuthenticatedLayout>
      

    );
}

export default App;