<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Company;
use App\Models\Meeting;
use App\Models\Meeting_category;
use App\Models\Task;

class MeetingController extends Controller
{
    public function index(Meeting $meetings){
        $authID = Auth::user()->id;
        
        $todayMeetings = $meetings->today($authID);
        $tomorrowMeetings = $meetings->tomorrow($authID);
        $weekMeetings = $meetings->week($authID);
        $afterMeetings = $meetings->after($authID);
        
        return Inertia::render('Manager/Meeting/Home', ['todayMeetings' => $todayMeetings->load('meeting_category'), 'tomorrowMeetings' => $tomorrowMeetings->load('meeting_category'), 'weekMeetings' => $weekMeetings->load('meeting_category'), 'afterMeetings' => $afterMeetings->load('meeting_category')]);
    }
    
    public function create(Company $company, Meeting_category $meetingCategories){
        return Inertia::render('Manager/Meeting/Create', ['company' => $company, 'meetingCategories' => $meetingCategories->get()]);
    }
    
    public function store(Request $request, Company $company, Meeting $meeting){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $meeting = $meeting->fill($input);
        $meeting->userID = $authID;
        $meeting->registrateUserID = $authID;
        $meeting->save();

        return redirect('/meeting/' . $meeting->companyID);
    }
    
    public function show(Meeting $meeting){
        return Inertia::render('Manager/Meeting/Show', ['meeting' => $meeting->load('meeting_category')]);
    }
    
    public function edit(Meeting $meeting, Company $company, Meeting_category $meetingCategories){
        $company = $company->where("id", "=", $meeting->companyID)->first();
        
        return Inertia::render('Manager/Meeting/Edit', ['meeting' => $meeting, 'company' => $company, 'meetingCategories' => $meetingCategories->get()]);
    }
    
    public function update(Meeting $meeting, Request $request){
        $input = $request->all();
        $meeting->fill($input)->save();
        return redirect('/meeting/' . $meeting->companyID);
    }
    
    public function delete(Meeting $meeting){
        $companyID = $meeting->companyID;
        $meeting -> delete();
        
        return redirect('/meeting/' . $companyID);
    }
    
    public function calendar(Meeting $meeting, Task $task){
        $meeting_array = $meeting->calendar();
        $task_array = $task->calendar();
        $event = [];
        $event = array_merge($meeting_array, $task_array);
        
        return Inertia::render('Manager/Calendar/Home', ['events' => $event]);
    }
}
