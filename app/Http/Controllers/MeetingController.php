<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Campany;
use App\Models\Meeting;
use App\Models\Meeting_category;
use App\Models\Task;

class MeetingController extends Controller
{
    public function meetingHome(Campany $campany, Meeting $meetings, Task $tasks){
        $meetings = $meetings->where('campanyID', '=', $campany->id)->with("meeting_category")->get();
        $tasks = $tasks->where('campanyID', '=', $campany->id)->where('state', '!=', 'finish')->with("task_category")->get();
        return Inertia::render('Manager/Meeting/Home', ['meetings' => $meetings, 'campany' => $campany, 'tasks' => $tasks]);
    }
    
    public function create(Campany $campany, Meeting_category $meetingCategories){
        return Inertia::render('Manager/Meeting/Create', ['campany' => $campany, 'meetingCategories' => $meetingCategories->get()]);
    }
    
    public function store(Request $request, Campany $campany, Meeting $meeting){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $meeting = $meeting->fill($input);
        $meeting->userID = $authID;
        $meeting->registrateUserID = $authID;
        $meeting->save();

        return redirect('/meeting/' . $meeting->campanyID);
    }
    
    public function show(Meeting $meeting){
        return Inertia::render('Manager/Meeting/Show', ['meeting' => $meeting->load('meeting_category')]);
    }
    
    public function edit(Meeting $meeting, Campany $campany, Meeting_category $meetingCategories){
        $campany = $campany->where("id", "=", $meeting->campanyID)->first();
        
        return Inertia::render('Manager/Meeting/Edit', ['meeting' => $meeting, 'campany' => $campany, 'meetingCategories' => $meetingCategories->get()]);
    }
    
    public function update(Meeting $meeting, Request $request){
        $input = $request->all();
        $meeting->fill($input)->save();
        return redirect('/meeting/' . $meeting->campanyID);
    }
    
    public function delete(Meeting $meeting){
        $campanyID = $meeting->campanyID;
        $meeting -> delete();
        
        return redirect('/meeting/' . $campanyID);
    }
}
