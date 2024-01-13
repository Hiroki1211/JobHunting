<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Campany;
use App\Models\Meeting;
use App\Models\Meeting_category;

class MeetingController extends Controller
{
    public function meetingHome(Campany $campany, Meeting $meetings){
        $meetings = $meetings->where('campanyID', '=', $campany->id)->with("meeting_category")->get();
        return Inertia::render('Manager/Meeting/Home', ['meetings' => $meetings, 'campany' => $campany]);
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
}
